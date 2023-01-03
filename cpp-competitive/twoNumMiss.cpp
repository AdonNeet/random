/**
 *		Author 	: AdonNeet
 *		Date	: 20/10/2022
 *		Note 	: retard alert!
**/

#include <bits/stdc++.h>
using namespace std;

int main(){
	int n, bord=0;
	cin>>n;
	int had[n-1];
	
	for(int i=0;i<n-2;i++){
		int temp;
		cin>>temp;
		had[temp-1]=1;
	}
	
	int i=0;
	while(bord<=2){
		if(had[i]!=1){
			cout<<i+1<<endl;
			bord++;
		}
		i++;
	}
}
