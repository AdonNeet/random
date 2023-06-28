/**
 *		Author 	: AdonNeet
 *		Date	: 20/10/2022
 *		Note	: TLE
**/

#include <bits/stdc++.h>
using namespace std;

int main(){
	int n, q;
	
	cin>>n;
	int dat[n-1];
	for(int i=0;i<n;i++){
		cin>>dat[i];
	}
	
	cin>>q;
	int que[q], ans[q];
	bool had[q];
	for(int i=0;i<q;i++){
		cin>>que[i];
	}
	
	for(int i=0;i<q;i++){
		int temp = que[i];
		for(int j=0;j<n;j++){
			if(dat[j]==temp){
				ans[i]=j;
				had[i]=true;
				cout<<ans[i]<<endl;
				break;
			}
		}
		if(had[i]==false){
			ans[i]=-1;
			cout<<ans[i]<<endl;
		}
	}
}
