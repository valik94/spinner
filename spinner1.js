
const dryArray = ['|', '/', '-', '\\', '|', '/', '-', '|'];
dryArray.forEach((dash, i) =>{
  setTimeout(() => {
    process.stdout.write(`\r${dash}   `)
  }, i*200);
})

