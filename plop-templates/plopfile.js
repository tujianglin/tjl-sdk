/*
plop doc: https://github.com/plopjs/plop
prompt doc: https://github.com/SBoudrias/Inquirer.js/#prompt-types
template doc: https://github.com/wycats/handlebars.js/
*/

const functionGenerator = require('./function/prompt')

module.exports = function (plop) {
  plop.setGenerator('function', functionGenerator)
}
