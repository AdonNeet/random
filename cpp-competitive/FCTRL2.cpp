/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-07 13:34:32.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma") // if use intel cpu
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>   
#include <boost/multiprecision/cpp_int.hpp>	// use boost lib
 
using namespace std;
using namespace boost::multiprecision;	// the namespace for boost lib
 
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

 
cpp_int fakt(cpp_int n)
{
	if(n==0)
	return 1;
	return n*fakt(n-1);
}


int main()
{
    // #ifndef ONLINE_JUDGE
	// freopen("input.txt", "r", stdin);
	// freopen("output.txt", "w", stdout);
	// #endif
	
	fast_cin();
    int t,n; cpp_int ans;
	cin>>t;
	while(t--){
		cin>>n;
		cout << fakt(n) << ln;
	}
	
	return 0;
}