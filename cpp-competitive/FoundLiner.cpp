#include <bits/stdc++.h>
using namespace std;

int N, M, indexLow;
bool init = true;

int main(){
	cin>>N>>M;
	int num[N-1];
	
	for(int i=0;i<N;i++){
		cin>>num[i];
	}
	
	indexLow = 0;
	
	for(int j=0;j<N;j++){
		if(num[j]==M){
			!init;
			cout<<j;
			break;
		}
	}
	
	if(init){
		cout<<-1;
	}	
	
	
}
