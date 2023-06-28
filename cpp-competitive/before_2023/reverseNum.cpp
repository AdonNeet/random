/**
 *		Author : AdonNeet
 *		Date	: 20/10/2022
 *		Retarded, pending!
**/

#include <bits/stdc++.h>
using namespace std;

int main(){
	int n;
	
	cin>>n;
	string ans[n-1];
	
	for(int i=0;i<n;i++){
		int x; 
		string temp1, temp2;
		cin>>temp1;
		x = sizeof(temp1);
		reverse(temp1, temp1);

		int j = 0;
		while(j<n){
			if(temp1[j]!="0"){
				temp2 += temp1[j];
				j++;
			}else {
				continue;
			}
		}
	
	for(int i=n-1;i>=0;i--){
		cout<<ans[i];
	}
	
		
	}	
}
