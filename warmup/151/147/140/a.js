main(require('fs').readFileSync('/dev/stdin', 'utf8'))


function main(input) {
    const N = Number(input.trim());
    console.log(N ** 3);
}
