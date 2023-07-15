/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-11 22:29:20.000-05:00
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
    int a, b; cin >> a >> b;
    int arr[3];
    arr[0] = a + b;
    arr[1] = a - b;
    arr[2] = a * b;
    sort(arr, arr + 2, greater<int>());
    
    if(arr[0] > arr[2]) cout << arr[0];
    else cout << arr[2];

    return 0;
}