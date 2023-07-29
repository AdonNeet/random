/*
 *		Author	: nekoChores
 *		Date	: 2023-07-16 13:02:50.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#include <bits/stdc++.h>  

using namespace std;

typedef long long ll;
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
 
int main()
{
    // #ifndef ONLINE_JUDGE
    // freopen("input.in", "r", stdin);
    // freopen("output.out", "w", stdout);
    // #endif
 
    fast_cin();
    ll a, b, c, d;
    cin >> a >> b >> c >> d;

    if(a*d > b*c) cout << "lebih besar";
    else if(a*d < b*c) cout << "lebih kecil";
    else cout << "sama";

    return 0;
}