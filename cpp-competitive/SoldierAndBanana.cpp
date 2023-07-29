/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-24 22:45:52.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma") // if the judge machine use intel
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  

using namespace std;
typedef long long ll;
#define forn(i,e) for(ll i = 0; i < e; i++)
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)


int main()
{
    #ifndef ONLINE_JUDGE
    freopen("input.in", "r", stdin);
    freopen("output.out", "w", stdout);
    #endif
 
    fast_cin();
    ll k, n, w, bill=0, x=1;
    cin >> k >> n >> w;

    forn(i, w){
        bill += k*x;
        x++;
    }

    if(bill-n > 0) cout << bill - n;
    else cout << 0;

    return 0;
}