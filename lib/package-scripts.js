const { series } = require('nps-utils');

module.exports = {
  scripts: {
    default: series.nps('compile', 'run'),
    compile: 'tsc',
    run: 'node dist/index.js',
    test: 'echo "Error: no test specified" && exit 1'
  }
};
