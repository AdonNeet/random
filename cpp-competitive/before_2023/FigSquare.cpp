#include <bits/stdc++.h>
using namespace std;

int main(){
	int n, med;
	char ln, brd;
	bool had = false;
	
	cin>>n;
	cin>>brd;
	cin>>ln;
	
	if(n%2==1){
		med = ceil(n/2);
		had = true;
	}
	
	for(int i=0;i<n;i++){
		for(int j=0;j<n;j++){
			if(i==0 || i==n-1 || j==0 || j==n-1){
				cout<<ln;
			}else if(had && i==med && j==med){
				cout<<"*";
			}else{
				cout<<brd;
			}
		}
		cout<<endl;
	}
}
