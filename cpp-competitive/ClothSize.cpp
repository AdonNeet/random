/**
 *		Author : AdonNeet
 *		Date	: 20/10/2022
**/

#include <bits/stdc++.h>
using namespace std;

int main(){
	int b, p, l;
	cin>>b>>p>>l;
	
	if(b>18||p>80||l>180){
		cout<<"X";
	}else if(b>14||p>100||l>220){
		cout<<"L";
	}else if(b>10||p>40||l>90){
		cout<<"M";
	}else {
		cout<<"S";
	}
}
