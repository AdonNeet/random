#include <bits/stdc++.h>
using namespace std;


int main(){
	int t, n;
	cin>>t;
	for(int i=0;i<t;i++){
		long long se4, se7, se28;
		cin>>n;
		
		se4 = n/4;
		se7 = n/7;
		se28 = n/28;
		
//		se4 = (se4+1)*se4*2;
//		se7 = (se7+1)*se7*(7/2);
//		se28 = (se28+1)*se28*14;

		se4 = (se4+1)*4*se4/2;
		se7 = (se7+1)*7*se7/2;
		se28 = (se28+1)*28*se28/2;
		
		cout<<se4+se7-se28<<endl;
	}
}
