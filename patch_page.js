const fs = require('fs');
let file = fs.readFileSync('src/app/nrs/[id]/page.tsx', 'utf8');

file = file.replace(
  /(\<div className="flex flex-wrap items-center gap-3 mt-5"\>[\s\S]*?\<\/div\>)/,
  `$1` // We'll keep the tags but conditionally render them if they exist
);

// We'll replace the exact block manually with sed or a better script
