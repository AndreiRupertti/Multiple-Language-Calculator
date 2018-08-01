var Input = require('prompt-input');
const methods = require('./methods.js')

console.log(''
+'\tCALCULATOR:\n'
+'- Operations: sum, div, subtract, multply, pow\n'
+'How to use: just type "sum [number] [number]'
+`Type 'exit' to close application`
)
const input = new Input({
  message: '\n\Type command: '
})

input.ask((command) => {
  const invalidCommand = () => console.log('Invalid Command :(')
  const commands = command.split(' ')
  
  if (commands.some(str => str.toLowerCase() === 'exit')) return
  const operation = commands[0]
  const firstParameter = Number(commands[1])
  const secondParameter = Number(commands[2])
  
  return methods[`${operation}`] && (!!firstParameter && !!secondParameter)
    ? console.log(methods[`${operation}`](firstParameter, secondParameter))
    : invalidCommand()
})
