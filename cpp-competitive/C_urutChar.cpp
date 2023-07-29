/*
 *		Author	: nekoChores
 *		Date	: 2023-07-16 13:10:02.000-05:00
*/
 
#pragma GCC optimize("Ofast")
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
    ll n; cin >> n;
    string a, b; cin >> a; cin >> b;

    ll ans = 0;
    forn(i, n){
        if(a[i]>b[i]){
            ans++;
            while(a[i]>=b[i]){
                i++;
                if(i==n) break;
            }
        }
    }

    cout << ans;
}