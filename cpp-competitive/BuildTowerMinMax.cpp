#include <bits/stdc++.h>
using namespace std;

int t, n, a[3], l[20], h[20];

int main(){
	cin>>t;
	for(int i=0;i<t;i++){
		cin>>n;
		
		for(int j=0;j<n;j++){
			cin>>a[0]>>a[1]>>a[2];
			sort(a, a+3);
			l[i] += a[0];
			h[i] += a[2];
		}
	}
			
	for(int i=0;i<t;i++){
		cout<<l[i]<<" "<<h[i]<<endl;
	}
}
