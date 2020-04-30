const READ = str => str;
const EVAL = str => str;
const PRINT = str => str;
const rep = str => PRINT(EVAL(READ(str)));

process.stdin.setEncoding('utf8');

process.stdout.write(`user> `);

process.stdin.on('readable', () => {
  let stdin = rep(process.stdin.read());
  while (stdin) {
    process.stdout.write(`${stdin}user> `);
    stdin = rep(process.stdin.read());
  }
});
