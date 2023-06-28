/*
	// Author 	: adon_neet
	// Date 	: 19-03-2022
*/

#include <bits/stdc++.h>
using namespace std;

int main(){
	int x[2], p;
	
	for(int i=0;i<=2;i++){
		cin>>x[i];
	}
	cin>>p;
	
	for(int i=0;i<=2;i++){
		for(int j=0;j<=2;j++){
			for(int k=0;k<=2;k++){
				if(x[i]!=x[j]!=x[k]){
					if(x[i]<x[j]<x[k]){
						printf("%d %d %d", x[i], x[j], x[k]);
					}
				}
			}
		}
	}
}
