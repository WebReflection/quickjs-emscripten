const QJS = require('./dist/index.js');

const SEP = ',\n  ';

const keys = Object.keys(QJS);
const group = `{${SEP.slice(1)}${keys.join(',\n  ')}${SEP.slice(0, -2)}}`;

const output = `
import __qjs_module__ from './index.js';
const ${group} = __qjs_module__;
export ${group};
`;

require('fs').writeFileSync('./dist/quickjs-emscripten.js', output);
