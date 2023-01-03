#include <bits/stdc++.h>
using namespace std;
string kata;
char huruf[30];

int main(){
	cin>>kata;
	for(int i=0;i<10;i++){
		huruf[i]=kata[i];
	}
	
	if(huruf[0]=="h" || huruf[0]=="H"){
		cout<<1;
	}
}
