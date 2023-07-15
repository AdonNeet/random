/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-11 23:53:12.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
 
using namespace std;

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

int main()
{
    // #ifndef ONLINE_JUDGE
    // freopen("input.in", "r", stdin);
    // freopen("output.out", "w", stdout);
    // #endif
 
    fast_cin();
    int t; string s;
    cin >> t;
    while(t--){
        cin >> s; 
        if(s.length() > 10) cout << s[0] << s.length()-2 << s[s.length()-1] << endl;
        else cout << s << endl;
    }

    return 0;
}