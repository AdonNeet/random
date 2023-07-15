/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-12 20:52:01.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
#include <cmath>

using namespace std;

typedef long long ll;
typedef long double ld;

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

 
int main()
{
    // #ifndef ONLINE_JUDGE
    // freopen("input.in", "r", stdin);
    // freopen("output.out", "w", stdout);
    // #endif
 
    fast_cin();
    ld n, m, a;
    cin >> n >> m >> a;
    ll b = ceil(n/a);
    ll c = ceil(m/a);
    cout << b*c << endl;

    return 0;
}