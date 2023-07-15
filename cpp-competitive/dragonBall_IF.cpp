/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-10 00:21:16.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  

using namespace std;

#define ll long long
#define forn(i,e) for(ll i = 0; i < e; i++)
#define ln "\n"
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)


int main()
{
    fast_cin();
    int t, n, flag;
    string ans;
    cin >> t;
    while(t--){
        flag = 5; ans = "k";
        cin >> n;
        while(flag--){
            if(flag%2==0){
                forn(i, n) ans += "a";
                if(flag == 0) break;
                ans += "m";
            }else if(flag%1==0){
                forn(i, n) ans += "e";
                ans += "h";
            }
        }
        cout << ans << ln;
    }
}