function sieve(max) {
  const isPrime = new Array(max + 1).fill(true);
   isPrime[0] = isPrime[1] = false; // 0 и 1 не являются простыми числами
    
    for (let i = 2; i * i <= max; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= max; j += i) {
         isPrime[j] = false;
            }
        }
    }
    
          return isPrime;
}

function countPrimesInRange(l, r, isPrime) {
    let count = 0;
    for (let i = Math.max(2, l); i <= r; i++) {
        if (isPrime[i]) {
            count++;
        }
    }
    return count;
}

function main() {
    const fs = require('fs');
     const input = fs.readFileSync(0, 'utf-8').trim().split('\n');
    
     const MAX = 1000000;
      const isPrime = sieve(MAX);

    const results = [];
     for (const line of input) {
      const [l, r] = line.split(' ').map(Number);
        if (l === -1 && r === -1) {
         break;
        }
        const count = countPrimesInRange(l, r, isPrime);
        results.push(count);
    }

    results.forEach(result => console.log(result));
}

main();
