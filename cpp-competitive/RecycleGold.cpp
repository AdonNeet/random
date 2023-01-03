#include <bits/stdc++.h>
using namespace std;

int cyc(int x){
	if(x>11){
		return max(x, cyc(x/2)+cyc(x/3)+cyc(x/4));
	}else{
		return x;
	}
}

int main(){
	int n, ans;
	cin>>n;
	
	ans = cyc(n);
	cout<<ans;
}
