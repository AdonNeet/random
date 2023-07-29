/*
 *		Author	: nekoChores
 *		Date	: 2023-07-23 13:03:52.000-05:00
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
    ll tp, tot = 0, n[1000], ih, il, h=0, l=0, s, x, b = 0;
    cin >> tp;
    forn(i, tp){
        cin >> n[i];
        tot +=  n[i];

        if(i == 0){
            h = n[i];
            l = n[i];
            ih = i;
            il = i;
        }

        if(n[i] > h){
            h = n[i];
            ih = i;
            b += 1;
        }else if(n[i] < l){
            l = n[i];
            il = i;
            b += 1;
        }

    }


    if(tot%tp == 0 && (b <= 2 || b == 0)){
        s = tot/tp;
        x = h-s;
        if(x == 0){
            cout << "SESUAI";
        }else {
            cout << x << " "<< ih+1 << " " << il+1;
        }
    }else {
        cout << "TIDAK SESUAI";
    }


    return 0;
}