/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-13 23:23:47.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#include <bits/stdc++.h>  
 
using namespace std;

typedef long long ll;

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

 
int main()
{
    #ifndef ONLINE_JUDGE
    freopen("input.in", "r", stdin);
    freopen("output.out", "w", stdout);
    #endif
 
    fast_cin();
    ll n, sum = 0;
    cin >> n;
    if(n%2==0) sum = n/2;
    else sum = -ceil(n/2.0);
    cout << sum;

    return 0;
}