#include <bits/stdc++.h>
using namespace std;

int m, n;

int main(){
	cin>>m;
	n=sqrt(m);
	
	if((n*n)==m){
		cout<<n;
	}else{
		cout<<0;
	}	
}
