const sortObject = require('sort-object-keys');
const orderBy = require('sort-order');

const PREFIXES = /^(pre|post)/;
// const BACKSLASHES = /^(?:\\[nrt])*/;
const BACKSLASHES = /^(?:[\n\r\t])*/;

// Sort alphabetically by script name excluding pre/post prefixes
function scriptNameArbitrary(keysOrder){
  return function(...args) {

    const [a, b] = args
      .map((arg) => keysOrder.findIndex( key => {
        const argWithoutSlashes = arg.replace(BACKSLASHES, '')
        return argWithoutSlashes.indexOf(key) == 0
          || argWithoutSlashes.replace(PREFIXES, '').indexOf(key) == 0
      } ) )
      .map( i => i === -1 ? keysOrder.length : i );

    if (a !== b) {
      return a < b ? -1 : 1;
    } else {
      return 0;
    }

  }
}

function scriptName(...args) {
  const [a, b] = args.map((arg) => arg.replace(BACKSLASHES, '').replace(PREFIXES, ''));
  
  if (a !== b) {
    return a < b ? -1 : 1;
  } else {
    return 0;
  }
}

// Sort by pre, script, post
function prefixesOrdering(...args) {
  const [a, b] = args.map((arg) => arg.replace(BACKSLASHES, ''));

  if (a.startsWith('pre') || b.startsWith('post')) {
    return -1;
  } else if (a.startsWith('post') || b.startsWith('pre')) {
    return 1;
  } else {
    return 0;
  }
}


module.exports = function sortScripts(scripts = {}, scriptsKeyOrder= []) {
  const order = orderBy(
    scriptNameArbitrary(scriptsKeyOrder),
    scriptName,
    prefixesOrdering
  );

  const keys = Object.keys(scripts);
  if (keys.length === 0) {
    return {};
  } else {
    return { scripts: sortObject(scripts, keys.sort(order)) };
  }
};
