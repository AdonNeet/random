#include <bits/stdc++.h>
using namespace std;

int n;

int main(){
	cin>>n;
	long m[n-1];
	
	for(int i=0;i<n;i++){
		cin>>m[i];
	}
	
	sort(m, m+n);
	for(int i=0;i<n;i++){
		cout<<m[i]<<endl;
	}
}
