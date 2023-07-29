/*
 *		Author	: AdonNeet
 *		Date	: 2023-07-15 19:35:20.000-05:00
*/
 
#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>  

using namespace std;
 
typedef long long ll;
#define kueri ll tp; cin >> tp; while(tp--)

#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)

int main()
{
    fast_cin();
    int temp;
    bool sen = false;

    kueri{
        cin >> temp;
        if(temp%2 == 0) {
            sen = true;
            break;
        }
    }

    if(sen) cout << "YA";
    else cout << "TIDAK";

    return 0;
}