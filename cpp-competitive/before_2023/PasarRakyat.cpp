#include <bits/stdc++.h>
using namespace std;

int N;

int gcd(int x, int y){
	if(y==0){
		return x;
	} else{
		return gcd(y, x%y);
	}
}

int main(){
	cin>>N;
	int D[N-1];
	
	int i = 0;
	int ans = 1;
	while(i<N){
		cin>>D[i];
		ans = ans*D[i]/gcd(ans, D[i]);
		i++;
	}
	cout<<ans<<endl;	
}
