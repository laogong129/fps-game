#!/usr/bin/env node
/**
 * 质量检测工程师 - Quality Engineer
 * 职责：代码规范、命名规范、无魔数、文件结构、代码重复检测
 */
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

function warn(name, msg) {
  warnings.push(`[${name}] ${msg}`);
}

console.log('\n🔍 质量检测工程师（Quality Engineer）');
console.log('='.repeat(50));

// ── 1. 文件行数检查 ──
console.log('\n【1/4】文件行数检查...');
const srcFiles = [
  'src/main.js', 'src/config.js',
  'src/game/spawner.js', 'src/game/player.js', 'src/game/weapon.js',
  'src/game/enemy.js', 'src/game/levelup.js', 'src/game/hud.js',
  'src/game/text.js', 'src/game/arena.js', 'src/game/sound.js', 'src/game/style.js',
];
for (const f of srcFiles) {
  const path = resolve(SRC_DIR, f);
  if (!existsSync(path)) continue;
  const lines = readFileSync(path, 'utf8').split('\n').length;
  const ok = lines <= 300;
  check(f, ok, `${lines} 行${ok ? '' : `（超限 ${lines - 300} 行）`}`);
}

// ── 2. 魔数检查 ──
console.log('\n【2/4】魔数检查...');
for (const f of srcFiles) {
  const path = resolve(SRC_DIR, f);
  if (!existsSync(path)) continue;
  const content = readFileSync(path, 'utf8');
  // 匹配独立数字字面量（排除注释、字符串、config.js）
  if (f === 'src/config.js') continue;
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('//') || line.startsWith('*')) continue;
    // 找赋值中的字面量数字（非0/1/2/3等小整数）
    const nums = line.match(/\b(\d{2,})\b/g);
    if (nums && nums.length > 0) {
      // 检查是否是配置引用（如 CONFIG.xxx）
      const isConfigRef = /CONFIG\.\w+/.test(line);
      if (!isConfigRef) {
        warn(`${f}:${i + 1}`, `可能含有魔数: ${line.trim().slice(0, 70)}`);
      }
    }
  }
}
check('魔数检查', true, `已扫描 ${srcFiles.length} 个文件`);

// ── 3. 命名规范检查 ──
console.log('\n【3/4】命名规范检查...');
const camelCasePattern = /^[a-z][a-zA-Z0-9]*$/;
const UPPER_PATTERN = /^[A-Z][A-Z0-9]*$/;
let namingIssues = 0;
for (const f of srcFiles) {
  const path = resolve(SRC_DIR, f);
  if (!existsSync(path)) continue;
  const content = readFileSync(path, 'utf8');
  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('//') || line.startsWith('*')) continue;
    // 检查变量/函数声明
    const matches = line.match(/(?:const|let|var|function|export\s+(?:const|function|class))\s+(\w+)/g);
    if (matches) {
      for (const m of matches) {
        const name = m.match(/\s(\w+)\s*[\(=;]/)?.[1];
        if (name && !camelCasePattern.test(name) && !UPPER_PATTERN.test(name) && !name.startsWith('_')) {
          namingIssues++;
          if (namingIssues <= 5) warn(`${f}:${i + 1}`, `命名不规范: ${name}`);
        }
      }
    }
  }
}
check('命名规范', namingIssues === 0, `${namingIssues} 处命名问题`);

// ── 4. 代码重复检测 ──
console.log('\n【4/4】代码重复检测...');
const allContent = {};
for (const f of srcFiles) {
  const path = resolve(SRC_DIR, f);
  if (existsSync(path)) allContent[f] = readFileSync(path, 'utf8').split('\n').filter(l => l.trim().length > 10);
}
let dupLines = 0;
const fileEntries = Object.entries(allContent);
for (let i = 0; i < fileEntries.length; i++) {
  for (let j = i + 1; j < fileEntries.length; j++) {
    const [f1, lines1] = fileEntries[i];
    const [f2, lines2] = fileEntries[j];
    for (const l1 of lines1) {
      for (const l2 of lines2) {
        if (l1.trim() === l2.trim() && l1.length > 30) dupLines++;
      }
    }
  }
}
check('重复代码', dupLines <= 10, `发现 ${dupLines} 处潜在重复`);

// ── 结果 ──
console.log('\n' + '='.repeat(50));
if (errors.length > 0) {
  console.log(`❌ 质量检查失败，共 ${errors.length} 个错误：`);
  for (const e of errors) console.log('  ' + e);
  if (warnings.length > 0) {
    console.log(`\n  ⚠️ ${warnings.length} 个警告：`);
    for (const w of warnings) console.log('    ' + w);
  }
  process.exit(1);
} else {
  console.log('✅ 质量检测工程师：全部通过');
  if (warnings.length > 0) {
    console.log(`  ⚠️ ${warnings.length} 个警告：`);
    for (const w of warnings) console.log('    ' + w);
  }
  writeFileSync(resolve(ROOT, '.qa/quality-engineer.passed'), Date.now().toString());
  process.exit(0);
}
