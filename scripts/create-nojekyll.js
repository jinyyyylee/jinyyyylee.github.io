const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');
const nojekyllPath = path.join(outDir, '.nojekyll');

// out 디렉토리가 없으면 생성
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// .nojekyll 파일 생성
fs.writeFileSync(nojekyllPath, '', 'utf8');
console.log('✓ Created .nojekyll file');