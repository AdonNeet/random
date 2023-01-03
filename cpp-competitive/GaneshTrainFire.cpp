/**
 *		Author 	: AdonNeet
 *		Date 	: 19/10/2022
**/

#include <bits/stdc++.h>
using namespace std;

int main(){
	int n, a[100-1];
	cin>>n;
	
	for(int i=0;i<n;i++){
		cin>>a[i];
	}

	for(int i=n-1;i>=0;i--){
		cout<<a[i];
		if(i-1!=-1){
			cout<<",";
		}	
	}
}
