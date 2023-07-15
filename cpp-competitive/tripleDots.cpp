/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-11 22:50:05.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  

using namespace std;

#define ll long long
#define forn(i,e) for(ll i = 0; i < e; i++)

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

int main()
{
    // #ifndef ONLINE_JUDGE
    // freopen("input.in", "r", stdin);
    // freopen("output.out", "w", stdout);
    // #endif
 
    fast_cin();
    int k, len; cin >> k;
    string s; cin >> s;
    len = s.length();

    if(k >= len) cout << s;
    else {
        forn(i, k) cout << s[i];
        cout << "...";
    }
    return 0;
}