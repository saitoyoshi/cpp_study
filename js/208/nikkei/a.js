const main = (input) => {
    const N = parseInt(input.trim())
    if (N % 2 === 0) {
        console.log(N / 2 - 1);
    } else {
        console.log(Math.floor(N / 2));
    }
}


main(require('fs').readFileSync('/dev/stdin', 'utf8'));