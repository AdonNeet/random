/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-15 20:15:11.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
#include <map>

 
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
    int count;
    map<char, int> db;
    string x; cin >> x;
    forn(i, x.size()){
        if (db.find(x[i]) == db.end()) // if the element is not found before the end of the map
        {
            db.insert({x[i], 1});
            count++;
        }
    }
    if (count % 2 == 0) cout << "CHAT WITH HER!";
    else cout << "IGNORE HIM!";

    return 0;
}