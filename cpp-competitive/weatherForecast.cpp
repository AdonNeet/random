/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-11 21:33:14.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")

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
    int t; string day;
    cin >> t >> day;
    if(day[t-1] == 'x'){
        cout << "No";
    }else {
        cout << "Yes";
    }
    return 0;
}