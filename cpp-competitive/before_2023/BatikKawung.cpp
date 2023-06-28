#include <bits/stdc++.h>
using namespace std;

int main(){
	int k, a;
	char c;
	
	cin>>k>>c>>a;
	
	for(int i=0;i<k;i++){
		for(int j=0;j<k;j++){
/**
 *			if( ((i==0||i==k-1)&&(j==0||j==k-1)) || ((i!=0&&i!=k-1)&&(j>0&&j<k-1)) ){
 *				cout<<a;
 *			}else {
 *				cout<<c;
 *			}							//seharusnya bisa, entah mengapa wa		
**/
			if(j == i||j+i+1==k){
				cout<<a;
			}else {
				cout<<c;
			}
		}		
		cout<<endl;
	}
}
