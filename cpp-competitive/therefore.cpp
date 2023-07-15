/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-11 22:22:48.000-05:00
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
    string s; cin >> s;
    int x = s.length()-1;
    if(s[x] == '2' || s[x] == '4'  || s[x] ==  '5' || s[x] == '7' || s[x] == '9') cout << "hon";
    else if( s[x] == '0' || s[x] == '1' || s[x] == '6' || s[x] == '8') cout << "pon";
    else cout << "bon";

    return 0;
}