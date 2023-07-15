/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-10 00:05:39.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#include <bits/stdc++.h>  

 
using namespace std;

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)


void solve(){
}
int main()
{
    fast_cin();
    string s, t, nd;
    cin >> s >> t;
    nd = s + t;

    if(s == t){
        cout << s;
    }else {
        cout << nd;
    }
}