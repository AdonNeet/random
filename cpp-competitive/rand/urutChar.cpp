/*
 *		Author	: nekoChores
 *		Date	: 2023-07-16 13:10:02.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  
#include <complex>
#include <queue>
#include <set>
#include <unordered_set>
#include <list>
#include <chrono>
#include <random>
#include <iostream>
#include <algorithm>
#include <cmath>
#include <string>
#include <vector>
#include <map>
#include <unordered_map>
#include <stack>
#include <iomanip>
#include <fstream>
 
using namespace std;
 
typedef long long ll;
#define forn(i,e) for(ll i = 0; i < e; i++)

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

 
int main()
{   
    ll n; cin >> n;
    string a, b; cin >> a >> b;

    ll ans = 0;
    forn(i, n){
        if(a[i]>b[i]){
            ans++;
            while(a[i]>=b[i]){
                i++;
            }
        }
    }

    cout << ans;

    return 0;
}