/**
 *		Author : AdonNeet
 *		Date	: 20/10/2022
 *		Retarded, pending!
**/

#include <bits/stdc++.h>
using namespace std;

char huruf[26] = { 'a', 'b', 'c', 'd', 'e', 'f', 'g',
                          'h', 'i', 'j', 'k', 'l', 'm', 'n',
                          'o', 'p', 'q', 'r', 's', 't', 'u',
                          'v', 'w', 'x', 'y', 'z' };


int main(){
	int n;
	char x, y, z;
	cin>>n;
	
	x = huruf[rand()%26]; y = huruf[rand()%26]; z = huruf[rand()%26];
	
	
	for(int i=1;i<=n;i++){
		if(i%2==0 && i!=n){
			cout<<x;
		}else if(i%3==0 && i!=n){
			cout<<y;
		}else {
			cout<<z;
		}
	}
}
