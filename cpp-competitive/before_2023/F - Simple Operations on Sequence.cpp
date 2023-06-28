/*
	// Author 	: adon_neet
	// Date 	: 25-04-2022
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
	int n, x, y, a[n], b[n], amodiff[n], sacamo[n], pos[n], posdiff[n], cost;
	
	//bagian input data
	cin>>n>>x>>y;
	for(int i=1;i<=n;i++){
		cin>>a[n];
	}
	for(int i=1;i<=n;i++){
		cin>>b[n];
	}
	
	
	//bagian algoritma
	for(int i=1;i<=n;i++){
		for(int j=1;j<=n;j++){
			//main ke selisih
			if(b[n]-a[j]<amodiff[n]){
				amodiff[n]=b[n]-a[j];
				sacamo[n]=a[j];
				pos[n]=k;
				posdiff[n]=n-pos[k];
				for(int k=1;k<=n<k++){
					if(sacamo[n]=sacamo[k]){
						//main ke vector
						if(possdiff[n]>possdiff[k]){
							
						}				
					}
				}
			}
		}

	
	for(int i=1;i<=n;i++){
		cost+=amodiff[i]*x;
	}
	
	cout<<cost;
}
