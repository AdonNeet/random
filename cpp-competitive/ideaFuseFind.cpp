#include <bits/stdc++.h>
using namespace std;

int main(){
	string word;
	string flag = "ideafuse";
	
	cin>>word;
	int i = word.find(flag);
	
	if(i==-1){
		cout<<i;
	}else {
		cout<<i+1;
	}
}
