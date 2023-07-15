/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-12 21:04:07.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
 
using namespace std;

typedef long long ll;

#define forn(i,e) for(ll i = 0; i < e; i++)

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)


int main()
{ 
    fast_cin();
    int n, k, ans = 0;
    cin >> n >> k;
    int a[n];
    forn(i,n){
        cin >> a[i];
    }

    forn(i,n){
        if(a[i] >= a[k-1] && a[i] > 0) ans++;
    }

    cout << ans;

    return 0;
}