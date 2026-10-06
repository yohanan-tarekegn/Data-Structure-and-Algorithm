#include <iostream>
using namespace std;
 
int main() {
    int k,n,w,sum=0;
    cin>>k>>n>>w;
    for(int i=1;i<=w;i++){
        sum+=(k*i);
    }
    int x=sum-n;
    if(x<0){
        cout<<0<<endl;
    }
    else
    cout<<x<<endl;
    return 0;
}