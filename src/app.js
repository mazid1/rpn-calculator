const readline = require('readline');
const Calculator = require('./calculator');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Please enter expression to calculate or \'q/Q\' to exit> ');
rl.prompt();

rl.on('line', (line) => {
  line = line.trim();
  if (line === 'q' || line === 'Q') {
    rl.close();
  }
  console.info(Calculator.calculate(line));
  rl.prompt();
});

rl.on('close', () => {
  process.exit(0);
});
