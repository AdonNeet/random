/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-11 23:44:31.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  

using namespace std;

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

int main()
{
    #ifndef ONLINE_JUDGE
    freopen("input.in", "r", stdin);
    freopen("output.out", "w", stdout);
    #endif
 
    fast_cin();
    int n; cin >> n;
    if(n%2 == 0 && a > 2) cout << "YES";
    else cout << "NO";
    return 0;
}