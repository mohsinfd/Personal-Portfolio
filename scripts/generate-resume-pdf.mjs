import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const constantsPath = resolve(root, 'src', 'constants.ts');
const htmlPath = resolve(root, 'dist', 'resume-print.html');
const pdfPath = resolve(root, 'public', 'mohsin-dingankar-cv.pdf');

const constants = readFileSync(constantsPath, 'utf8');
const match = constants.match(/export const RESUME_TXT = `([\s\S]*?)`;/);

if (!match) {
  throw new Error('Could not find RESUME_TXT in src/constants.ts');
}

const resumeText = match[1].replace(/\r\n/g, '\n').trim();
const sections = parseResume(resumeText);

mkdirSync(dirname(htmlPath), { recursive: true });

writeFileSync(htmlPath, renderResumeHtml(sections), 'utf8');

const chromePath = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
].find(existsSync);

if (!chromePath) {
  throw new Error('Chrome or Edge was not found, so the PDF could not be generated.');
}

execFileSync(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${pdfPath}`,
  pathToFileURL(htmlPath).href,
], {
  cwd: root,
  stdio: 'inherit',
});

function parseResume(text) {
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
  const name = lines[0];
  const tagline = lines[1];
  const contact = lines[2].split('|').map((item) => item.trim());

  const headingSet = new Set([
    'OPERATING RANGE',
    'PLATFORM LEADERSHIP YEARS',
    'SYSTEMS & SCALE YEARS',
    'FOUNDER / BUILDER YEARS',
    'EDUCATION',
  ]);

  const headingIndexes = lines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => headingSet.has(line));

  const intro = lines.slice(3, headingIndexes[0].index);
  const chunks = {};

  headingIndexes.forEach(({ line, index }, idx) => {
    const next = headingIndexes[idx + 1]?.index ?? lines.length;
    chunks[line] = lines.slice(index + 1, next);
  });

  return {
    name,
    tagline,
    contact,
    intro,
    operatingRange: chunks['OPERATING RANGE'][0].split('|').map((item) => item.trim()),
    roles: [
      {
        group: 'Platform Leadership',
        entries: parseEntries(chunks['PLATFORM LEADERSHIP YEARS']),
      },
      {
        group: 'Systems & Scale',
        entries: parseEntries(chunks['SYSTEMS & SCALE YEARS']),
      },
      {
        group: 'Founder / Builder',
        entries: parseEntries(chunks['FOUNDER / BUILDER YEARS']),
      },
    ],
    education: chunks.EDUCATION,
  };
}

function parseEntries(lines) {
  const entries = [];
  let current;

  for (const line of lines) {
    if (line.startsWith('- ')) {
      current?.bullets.push(line.slice(2));
      continue;
    }

    if (!current) {
      current = { title: line, meta: '', bullets: [] };
      entries.push(current);
      continue;
    }

    if (!current.meta) {
      current.meta = line;
      continue;
    }

    current = { title: line, meta: '', bullets: [] };
    entries.push(current);
  }

  return entries;
}

function renderResumeHtml(data) {
  return `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>${escapeHtml(data.name)} CV</title>
  <style>
    @page {
      size: A4;
      margin: 12mm 12mm 13mm;
    }

    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      color: #18181b;
      background: #ffffff;
      font-family: Inter, "Segoe UI", Arial, sans-serif;
      font-size: 9.4pt;
      line-height: 1.38;
    }

    header {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 18px;
      align-items: end;
      border-bottom: 1.4px solid #18181b;
      padding-bottom: 11px;
      margin-bottom: 12px;
    }

    h1 {
      margin: 0 0 4px;
      font-size: 24pt;
      line-height: 0.95;
      letter-spacing: 0;
      font-weight: 760;
    }

    .tagline {
      margin: 0;
      color: #334155;
      font-size: 9.6pt;
      font-weight: 700;
      text-transform: uppercase;
    }

    .contact {
      display: grid;
      gap: 3px;
      justify-items: end;
      color: #334155;
      font-size: 8.8pt;
      white-space: nowrap;
    }

    .summary {
      display: grid;
      grid-template-columns: 1fr 0.92fr;
      gap: 15px;
      margin-bottom: 11px;
    }

    .intro {
      margin: 0;
      color: #27272a;
    }

    .intro + .intro {
      margin-top: 7px;
    }

    .range {
      border-left: 2px solid #4f46e5;
      padding: 1px 0 1px 12px;
    }

    .range h2,
    section h2 {
      margin: 0 0 6px;
      color: #4f46e5;
      font-size: 8.3pt;
      letter-spacing: 0;
      text-transform: uppercase;
      font-weight: 800;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }

    .chip {
      border: 1px solid #d4d4d8;
      border-radius: 4px;
      padding: 3px 6px;
      color: #27272a;
      font-size: 7.8pt;
      line-height: 1.15;
      background: #fafafa;
    }

    section {
      break-inside: avoid;
      margin-top: 12px;
    }

    .role {
      display: grid;
      grid-template-columns: 1fr;
      gap: 3px;
      break-inside: avoid;
      padding-top: 8px;
      margin-top: 7px;
      border-top: 1px solid #e4e4e7;
    }

    .role:first-of-type {
      padding-top: 0;
      border-top: 0;
    }

    h3 {
      margin: 0;
      font-size: 10.8pt;
      line-height: 1.18;
      font-weight: 780;
    }

    .meta {
      margin: 0;
      color: #52525b;
      font-size: 8.4pt;
      font-weight: 650;
    }

    ul {
      margin: 3px 0 0;
      padding-left: 14px;
    }

    li {
      margin: 2px 0;
      padding-left: 1px;
    }

    li::marker {
      color: #4f46e5;
    }

    .education {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
    }

    .education p {
      margin: 0;
      border-top: 1px solid #e4e4e7;
      padding-top: 6px;
      font-weight: 650;
    }
  </style>
</head>
<body>
  <header>
    <div>
      <h1>${escapeHtml(data.name)}</h1>
      <p class="tagline">${escapeHtml(data.tagline)}</p>
    </div>
    <div class="contact">
      ${data.contact.map((item) => `<span>${escapeHtml(item)}</span>`).join('')}
    </div>
  </header>

  <div class="summary">
    <div>
      ${data.intro.map((item) => `<p class="intro">${escapeHtml(item)}</p>`).join('')}
    </div>
    <aside class="range">
      <h2>Operating Range</h2>
      <div class="chips">
        ${data.operatingRange.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join('')}
      </div>
    </aside>
  </div>

  ${data.roles.map((roleGroup) => `
    <section>
      <h2>${escapeHtml(roleGroup.group)}</h2>
      ${roleGroup.entries.map((entry) => `
        <article class="role">
          <h3>${escapeHtml(entry.title)}</h3>
          <p class="meta">${escapeHtml(entry.meta)}</p>
          <ul>
            ${entry.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join('')}
          </ul>
        </article>
      `).join('')}
    </section>
  `).join('')}

  <section>
    <h2>Education</h2>
    <div class="education">
      ${data.education.map((item) => `<p>${escapeHtml(item)}</p>`).join('')}
    </div>
  </section>
</body>
</html>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}
