/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-22 21:04:03.000-05:00
*/
 
#pragma GCC optimize("Ofast")
// #pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma") // if the judge machine use intel
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  

using namespace std;
typedef long long ll;
#define kueri ll tp; cin >> tp; while(tp--)
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

 
int power(ll x, ll y, ll p){
	int rest = 1;
	x = x%p;
	while(y>0){
		if(y&1 == 1){
			rest = (rest*x)%p;
		}

		y = y >> 1;
		x = (x*x)%p;
	}
	return rest;
}

int millerRabinTest(ll n, ll d, ll a){
	int x = power(a, d, n);

	if(x == 1 || x == n-1){
		return true;
	}

	while(d!=n-1){
		x = (x*x) % n;
		d = d << 1;

		if(x==1) return false;
		else if(x==n-1) return true;
	}
	return false;
}

int isP(ll n){
	if(n == 2 || n == 3) return true;
	else if(n&1 == 0) return false;

	int d = n -1;
	while(d%2 == 0){
		d = d/2;
	}

	int arr[] = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37};
	for(int a:arr){
		if(a>n-2) break;
		if(millerRabinTest(n, d, a) == false) return false;
	}
	return true;
}

int main()
{
	#ifndef ONLINE_JUDGE
	freopen("input.in", "r", stdin);
	freopen("output.out", "w", stdout);
	#endif
 
	fast_cin();
	ll temp;
	kueri{
		cin >> temp;
		if(isP(temp)) cout << "YES" <<endl;
		else cout << "NO" << endl;
	}
	return 0;
}