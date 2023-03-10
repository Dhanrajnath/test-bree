module.exports = {
  extension: ['.js'],
  'report-dir': './coverage',
  'temp-dir': './.nyc_output',
  reporter: ['lcov', 'html', 'text'],
  'check-coverage': true,
  lines: 100,
  functions: 100,
  branches: 100
};
