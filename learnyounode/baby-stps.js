const args = process.argv.slice(2);

let sum = 0;

args.forEach(num => {
    num = Number(num);
    sum = sum + num;
});

console.log(sum);
