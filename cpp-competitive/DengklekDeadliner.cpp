#include <bits/stdc++.h>
using namespace std;

int main(){
	int sec;
	cin>>sec;
	
	if(floor(sec/3600)>=1){
		cout<<floor(sec/3600)<<endl;
		sec = sec%3600;
	}else {
		cout<<0<<endl;
	}
	if(floor(sec/60)>=1){
		cout<<floor(sec/60)<<endl;
		sec = sec%60;
	}else {
		cout<<0<<endl;
	}
	cout<<sec;
}
