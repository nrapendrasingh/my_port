// Script to download and install native bindings
const https = require('https');
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const PACKAGE_NAME = 'lightningcss-win32-x64-msvc';

// Get the version from lightningcss package.json
const pkgPath = './node_modules/lightningcss/package.json';
const targetPkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const version = targetPkg.optionalDependencies?.[PACKAGE_NAME] || targetPkg.version;
console.log('lightningcss version:', targetPkg.version);
console.log('target binding version:', version);

const url = `https://registry.npmjs.org/${encodeURIComponent(PACKAGE_NAME)}/${version}`;

function get(url, cb) {
  https.get(url, { headers: { 'Accept': 'application/json' } }, (res) => {
    if (res.statusCode === 302 || res.statusCode === 301) {
      return get(res.headers.location, cb);
    }
    let data = '';
    res.on('data', d => data += d);
    res.on('end', () => cb(null, data));
    res.on('error', cb);
  }).on('error', cb);
}

function downloadFile(url, dest, cb) {
  const file = fs.createWriteStream(dest);
  https.get(url, (res) => {
    if (res.statusCode === 302 || res.statusCode === 301) {
      file.close();
      return downloadFile(res.headers.location, dest, cb);
    }
    res.pipe(file);
    file.on('finish', () => { file.close(); cb(null); });
    res.on('error', cb);
  }).on('error', cb);
}

function extractTgz(tgzPath, destDir, cb) {
  fs.mkdirSync(destDir, { recursive: true });
  try {
    execFileSync('tar', ['-xzf', tgzPath, '-C', destDir, '--strip-components=1'], { stdio: 'pipe' });
    cb(null);
  } catch(e) {
    console.error('tar failed:', e.message);
    cb(e);
  }
}

console.log('Fetching package info from:', url);
get(url, (err, data) => {
  if (err) { console.error('Error fetching package info:', err); process.exit(1); }
  
  let info;
  try { info = JSON.parse(data); } catch(e) {
    console.error('Error parsing package info:', e.message);
    process.exit(1);
  }
  
  const tarball = info.dist?.tarball;
  if (!tarball) {
    console.error('No tarball URL found');
    process.exit(1);
  }
  
  console.log('Downloading tarball from:', tarball);
  const tgzPath = path.join(__dirname, 'binding_tmp2.tgz');
  const destDir = path.join(__dirname, 'node_modules', PACKAGE_NAME);
  
  downloadFile(tarball, tgzPath, (err) => {
    if (err) { console.error('Download error:', err); process.exit(1); }
    console.log('Downloaded to:', tgzPath);
    
    extractTgz(tgzPath, destDir, (err) => {
      if (err) { console.error('Extract error:', err); process.exit(1); }
      fs.unlinkSync(tgzPath);
      console.log('Installed', PACKAGE_NAME, 'to', destDir);
    });
  });
});

