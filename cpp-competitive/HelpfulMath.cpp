/*
 *		Author	: nekoChores
 *		Date	: 2023-07-24 22:10:49.000-05:00
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
    string wa, ac = "", n[100];
    cin >> wa;
    int pos = wa.length(), idx = 0;

    forn(i, pos){
        if(wa[i] != '+'){
            n[idx] = wa[i];
            idx++;
        }
    }

    sort(n, n+idx);

    pos = 0;
    forn(i, idx){
        ac += n[i];
        pos++;

        if(pos%2==1 && i!=idx-1){
            ac += "+";
            pos++;
        }
    }

    cout << ac;
    return 0;
}