#include <bits/stdc++.h>
using namespace std;
#define ll long long

ll t, n, a[100000], ans[100];
int main(){
	cin>>t;
	
	for(int i=0;i<t;i++){
		cin>>n;
		for(int j=0;j<n;j++){
			cin>>a[j];
		}
		
		sort(a, a+n);
//		for(int l=0;l<n;l++){
//			cout<<a[l]<<" ";
//		}
		for(int k=n-1;k>=n-5;k--){
			ans[i]+=a[k];
		}
	}
	
	for(int i=0;i<t;i++){
		cout<<ans[i]<<endl;
	}
}
