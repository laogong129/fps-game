#!/usr/bin/env node
/**
 * 代码测试工程师 - Test Engineer
 * 职责：语法检查、模块加载、构建验证、运行时自测
 */
import { execSync } from 'child_process';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = process.cwd();
const SRC_DIR = resolve(ROOT, 'src');
const errors = [];
const warnings = [];

function check(name, condition, msg) {
  if (!condition) errors.push(`[FAIL] ${name}: ${msg}`);
  else console.log(`  ✓ ${name}`);
}

console.log('\n🧪 代码测试工程师（Test Engineer）');
console.log('='.repeat(50));

// ── 1. 语法检查 ──
console.log('\n【1/4】语法检查...');
for (const f of [
  'src/main.js', 'src/config.js',
  'src/game/spawner.js', 'src/game/player.js', 'src/game/weapon.js',
  'src/game/enemy.js', 'src/game/levelup.js', 'src/game/hud.js',
  'src/game/text.js', 'src/game/arena.js', 'src/game/sound.js', 'src/game/style.js',
]) {
  try {
    execSync(`node --check ${f}`, { cwd: ROOT, stdio: 'pipe' });
    check(f, true, '语法正确');
  } catch (e) {
    const msg = e.stderr?.toString() || e.message;
    check(f, false, msg.split('\n')[0]);
  }
}

// ── 2. 模块加载检查 ──
console.log('\n【2/4】模块加载检查...');
try {
  const r = execSync(`node -e "
    import('./src/config.js').then(c => {
      const e = c.CONFIG.enemy;
      if (!e) throw new Error('CONFIG.enemy missing');
      const types = Object.keys(e);
      if (types.length === 0) throw new Error('No enemy types defined');
      console.log('OK types='+types.join(','));
    }).catch(e => { console.error('ERR', e.message); process.exit(1); })
  "`, { cwd: ROOT, stdio: 'pipe', encoding: 'utf8' });
  const ok = !r.includes('ERR');
  check('config.js 加载', ok, ok ? 'OK' : r.trim());
} catch (e) {
  check('config.js 加载', false, e.message.split('\n')[0]);
}

// ── 3. 构建检查 ──
console.log('\n【3/4】构建检查...');
try {
  const r = execSync('npm run build', { cwd: ROOT, stdio: 'pipe', encoding: 'utf8' });
  const ok = r.includes('built in') || r.includes('✓ built');
  check('vite build', ok, ok ? '构建成功' : '构建输出异常');
  if (!ok) errors.push('构建失败:\n' + r);
} catch (e) {
  const msg = e.stderr?.toString() || e.message;
  check('vite build', false, msg.split('\n')[0]);
}

// ── 4. 关键文件存在性 ──
console.log('\n【4/4】关键文件检查...');
const requiredFiles = [
  'src/main.js', 'src/config.js',
  'src/game/spawner.js', 'src/game/player.js', 'src/game/weapon.js',
  'src/game/enemy.js', 'index.html',
];
for (const f of requiredFiles) {
  check(f, existsSync(resolve(ROOT, f)), f + ' 存在');
}

// ── 结果 ──
console.log('\n' + '='.repeat(50));
if (errors.length > 0) {
  console.log(`❌ 测试失败，共 ${errors.length} 个错误：`);
  for (const e of errors) console.log('  ' + e);
  if (warnings.length > 0) {
    console.log(`\n  ⚠️ ${warnings.length} 个警告：`);
    for (const w of warnings) console.log('    ' + w);
  }
  process.exit(1);
} else {
  console.log('✅ 代码测试工程师：全部通过');
  writeFileSync(resolve(ROOT, '.qa/test-engineer.passed'), Date.now().toString());
  process.exit(0);
}
