/**
 *		Author 	: 4donN3et
 *		Date	: 26-10-2022
**/

#include <bits/stdc++.h>
using namespace std;

int main(){
	int n;
    cout<<"How many numbers to enter?"<<endl;
    cin>>n;
    
    cout<<"Now, insert the num..."<<endl;
    int num[n-1];
    for(int i=0;i<n;i++){
        cin>>num[i];
    }
    
    sort(num, num+n); //this will sort the number from smallest
    
    cout<<"And there you go... sorted number from floor"<<endl;
    for(int i=0;i<n;i++){
        cout<<num[i]<<" ";
    } 
}
