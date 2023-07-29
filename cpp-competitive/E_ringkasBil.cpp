/*
 *		Author	: nekoChores
 *		Date	: 2023-07-23 13:35:42.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma") // if the judge machine use intel
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
 
using namespace std; 
typedef long long ll;
#define forn(i,e) for(ll i = 0; i < e; i++)
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

int main()
{
    fast_cin();
    ll n, a[100], tp[100], idx=0; 
    string ans;
    cin >> n;
    forn(i, n){
        cin >> tp[i]; 
    }

    sort(tp, tp+n);
    
    forn(i, n){
        if(i == 0){
            a[idx] = tp[i];
            idx += 1;
        }

        if(tp[i]==tp[i-1]) continue;
        else {
            a[idx] = tp[i];
            idx += 1;
        }
    }

    n = idx;
    idx = 0;

    forn(i, n){
        if(idx%2 == 0){
            ans += to_string(a[i]);
            idx+=1;
        }else if(a[i+1]-a[i] > 1 && (a[i]-a[i-1] == 1 ||  a[i]-a[i-1] == 0)){
            ans += "-" + to_string(a[i]) + ",";
            idx+=3;
        }else if(a[i+1]-a[i] > 1 && a[i]-a[i-1] > 1){
            ans += "," + to_string(a[i]) ;
            idx+=2;
        }else if(a[i+1]-a[i] == 1|| a[i+1]-a[i] == 0){
            continue;
        }else {
            ans += ",";
            idx+=1;
        }

        if(i == n-1 && idx%2 == 0){
            ans += to_string(a[i]);
        }
    }

    cout << ans;
    return 0;
}