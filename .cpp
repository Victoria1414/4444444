#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

// Функция для создания решета Эратосфена
vector<bool> sieve(int max) {
 vector<bool> is_prime(max + 1, true);
  is_prime[0] = is_prime[1] = false; // 0 и 1 не являются простыми числами
    
   for (int i = 2; i <= sqrt(max); ++i) {
     if (is_prime[i]) {
       for (int j = i * i; j <= max; j += i) {
          is_prime[j] = false;
            }
        }
    }
    
           return is_prime;
}

int main() {
    const int MAX = 1000000;
     vector<bool> is_prime = sieve(MAX);
    
      while (true) {
        int l, r;
         cin >> l >> r;
        
          if (l == -1 && r == -1) {
           break;
        }
        
        int count = 0;
          for (int i = std::max(2, l); i <= r; ++i) {
            if (is_prime[i]) {
             ++count;
            }
        }
    }
    
             return 0;
}
