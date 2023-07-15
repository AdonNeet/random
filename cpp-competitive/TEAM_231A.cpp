/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-12 20:23:22.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
 
using namespace std;
 
#define ll long long
#define forn(i,e) for(ll i = 0; i < e; i++)
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

 

void solve(){
}
int main()
{
    // #ifndef ONLINE_JUDGE
    // freopen("input.in", "r", stdin);
    // freopen("output.out", "w", stdout);
    // #endif
 
    fast_cin();
    int t, temp, sum, ans=0;
    cin >> t;
    while(t--){
        sum = 0;
        forn(i,3){
            cin >> temp;
            sum += temp;
        }
        if(sum>=2) ans++;
    }

    cout << ans;

    return 0;
}