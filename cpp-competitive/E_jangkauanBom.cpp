/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-16 11:37:08.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
#include <cmath>

using namespace std;
 
typedef long long ll;
#define forn(i,e) for(ll i = 0; i < e; i++)
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

int main()
{
    // #ifndef ONLINE_JUDGE
    // freopen("input.in", "r", stdin);
    // freopen("output.out", "w", stdout);
    // #endif

    fast_cin();
    ll xt, yt, xb, yb, mscont;
    cin >> xt >> yt;
    cin >> mscont;
    ll jarak[mscont];
    forn(i, mscont){
        cin >> xb >> yb;
        jarak[i] = ((xb-xt)*(xb-xt))+ ((yb-yt)*(yb-yt));
    }
    sort(jarak,jarak+mscont);
    cin >> xb;
    forn(i, xb){
        cin >> yb;
        yb *= yb;
        cout << lower_bound(jarak, jarak+mscont, yb+1) - jarak << endl;
    }
    return 0;
}