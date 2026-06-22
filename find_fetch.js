import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const out = execSync('grep -rn "window.fetch \\?=" node_modules/ || true').toString();
console.log("window.fetch=", out);

const out2 = execSync('grep -rn "globalThis.fetch \\?=" node_modules/ || true').toString();
console.log("globalThis.fetch=", out2);

const out3 = execSync('grep -rn "self.fetch \\?=" node_modules/ || true').toString();
console.log("self.fetch=", out3);

const out4 = execSync('grep -rn "\\.fetch \\?=" node_modules/ || true').toString();
const lines4 = out4.split('\\n').filter(line => !line.includes('/test/') && !line.includes('.test.'));
console.log(".fetch=", lines4.slice(0, 30).join('\\n'));
