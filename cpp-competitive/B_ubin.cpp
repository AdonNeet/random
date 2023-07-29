/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-16 13:48:17.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
using namespace std;
 
typedef unsigned long long int ulli;
ulli MOD = 1000000007;
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

 

int main(){
    fast_cin();
    ulli n, a = 1, b = 1, c = 0, d, ret;
    
    cin >> n;
    int q[69], i = 0;
    for(; n > 0; i++){
        q[i] = n % 2;
        n = n/2;
    }
    for(; i>=0;i--){
        d = (b*b + c*c) % MOD;
        c = (c*(2*b + c)) % MOD;
        b = d;
        if(q[i] == 1){
            a = b;
            b = c;
            c = (a+b) % MOD;
        }
    }
    a = b; b = c; 
    ret = ((a+b)*(a+b)) % MOD;
    cout << ret;
    return 0;
}