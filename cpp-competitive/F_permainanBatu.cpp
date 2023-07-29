/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-22 20:29:55.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma") // if the judge machine use intel
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
 

using namespace std;
typedef long long ll;
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
 

int s(ll x){
    if(x%4 == 0) return x;
    else if(x%4 == 1) return 1;
    else if(x%4 == 2) return x+1;
    else if(x%4 == 3) return 0;
}

int main()
{
    fast_cin();
    ll n=0, m=0, k=0;
    cin >> n >> k >> m;

    if(m%2 == 0) cout << "Kedua";
    else{
        if(s(n-1) ^ s(n-k-1)){
            cout << "Pertama";
        }else cout << "Kedua";
    }

    return 0;
}