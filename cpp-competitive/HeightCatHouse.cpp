#include <bits/stdc++.h>
using namespace std;
#define ll long long
ll ans=0;

/*
int proc(int x, int y){
	int t, temp=0;
	for(x;x<y;x++){
		cin>>t;
		if(t>temp){
			temp=t;
		}
	}
	ans += temp;
}


int main(){
	int n, k;
	cin>>n>>k;
	
	if(k<n){
		proc(0, k);
		ans += (1+1+1);
		proc(k, n);
	}else{
		proc(0, n);
		ans += (1+1);
	}
	cout<<ans;
}
*/

int main(){
	int n, k;
	ll t;
	
	cin>>n>>k;
	
	if(k<n){
		ll temp = 0;
		for(int i=0;i<k;i++){
			cin>>t;
			if(t>temp){
				temp=t;
			}
		}
		ans += temp+(1+1+1);
		ll temp = 0;
		for(int i=k;i<n;i++){
			cin>>t;
			if(t>temp){
				temp=t;
			}
		}
		ans += temp
	}else{
		ll temp = 0;
		for(int i=k;i<n;i++){
			cin>>t;
			if(t>temp){
				temp=t;
			}
		}
		ans += temp+(1+1);
	}
	
	cout<<ans;
}
