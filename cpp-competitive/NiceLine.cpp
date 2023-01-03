#include <bits/stdc++.h>
using namespace std;

int main(){
	int s, n, d, temp;
	cin>>s>>n>>d;
	temp = s;
	for(int i=0;i<n;i++){
		if(i==0){
			cout<<s<<endl;
		}else{
			temp += d;
			cout<<temp<<endl;
		}
	}
}
