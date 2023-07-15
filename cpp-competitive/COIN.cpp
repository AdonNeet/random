/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-11 14:10:53.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
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
 
// #include <boost/multiprecision/cpp_int.hpp> // for big_int than ll
 
using namespace std;
// using namespace boost::multiprecision; // namespace for boost
 
typedef long long ll;
typedef unsigned long long ull;
typedef long double ld;
typedef pair<int,int> p32;
typedef pair<ll,ll> p64;
typedef pair<double,double> pdd;
typedef vector<ll> v64;
typedef vector<int> v32;
typedef vector<vector<int> > vv32;
typedef vector<vector<ll> > vv64;
typedef vector<vector<p64> > vvp64;
typedef vector<p64> vp64;
typedef vector<p32> vp32;
ll MOD = 998244353;
double eps = 1e-12;
#define forn(i,e) for(ll i = 0; i < e; i++)
#define forsn(i,s,e) for(ll i = s; i < e; i++)
#define rforn(i,s) for(ll i = s; i >= 0; i--)
#define rforsn(i,s,e) for(ll i = s; i >= e; i--)
#define ln "\n"
#define dbg(x) cout<<#x<<" = "<<x<<ln
#define mp make_pair
#define pb push_back
#define fi first
#define se second
#define INF 2e18
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
#define all(x) (x).begin(), (x).end()
#define sz(x) ((ll)(x).size())
 

ll dp[1000005];
void solve(){
	dp[0] = 0;
	dp[1] = 1;
	dp[2] = 2;
	for(int i = 3; i < 1000005; i++){
		dp[i] = max((ll)i, dp[(int)i/2]+dp[(int)i/3]+dp[(int)i/4]);
	}
}
ll recurse(int n){
	if(n <= 1000000)
		return dp[n];
	return recurse(n/2)+recurse(n/3)+recurse(n/4);
}
int main(){
    // #ifndef ONLINE_JUDGE
    // freopen("input.txt", "r", stdin);
    // freopen("output.txt", "w", stdout);
    // #endif

    fast_cin();
	solve();
	int n; 
    while(cin >> n){
    	if(n <= 1000000){
    		cout<<dp[n]<<endl;
    	}else{
    		cout<<recurse(n)<<endl;
    	}
    }
    return 0;
}