/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-10 00:37:57.000-05:00
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
    // freopen("input.txt", "r", stdin);
    // freopen("output.txt", "w", stdout);
    // #endif
 
    fast_cin();
    ll n; cin >> n;
    cout << (n%2 == 0 ? "Tidak" : "Perlu") << endl;
    return 0;
}