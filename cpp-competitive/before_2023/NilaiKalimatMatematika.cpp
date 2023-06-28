/*
	// Author 	: adon_neet
	// Date 	: 18-03-2022
*/

#include <bits/stdc++.h>
using namespace std;

int a, c, e;
string b;
bool d;


int main(){	 
	cin>>a>>b>>c;
	if(b==">" || b=="<" || b=="="){
		if(b==">"){
			if(a > c){
				cout<<"benar";
			}else cout<<"salah";
		}else if(b=="<"){
			if(a < c){
				cout<<"benar";
			}else cout<<"salah";
		}else if(b=="="){
			if(a == c){
				cout<<"benar";
			}else cout<<"salah";
		}
	}else if(b=="+" || b=="-" || b=="*"){
		if(b=="+"){
			cout<<a+c;
		}else if(b=="-"){
			cout<<a-c;
		}else if(b=="*"){
			cout<<a*c;
		}
	}
}
