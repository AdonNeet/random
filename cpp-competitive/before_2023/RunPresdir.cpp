/**
 *		Author : AdonNeet
 *		Date	: 20/10/2022
**/

#include <bits/stdc++.h>
using namespace std;

long long n, k, temp=0;

int main(){

	cin>>n>>k;
	
	for(int i=0;i<n;i++){
		if(((temp%k)==0) && i!=0){
			temp = temp*2; //pangkat manual
		}else {
			temp = temp+1;
//			cout<<temp<<endl;
		}
	}
	cout<<temp;
}
