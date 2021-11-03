process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   '), 100,
  process.stdout.write('\r/   '), 300,
  process.stdout.write('\r-   '), 500,
  process.stdout.write('\r\\   '), 700, 
  process.stdout.write('\r|   '), 900, 
  process.stdout.write('\r/   '), 1100,
  process.stdout.write('\r-   '), 1300, 
  process.stdout.write('\r\\   '), 1500, 
  process.stdout.write('\r|   '), 1700
});