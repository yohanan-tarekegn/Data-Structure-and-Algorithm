#include <iostream>
#include <vector>
using std::vector;
using namespace std;
int main(){
	
	int n,k,t=0;
	cin>>n;
	vector<int>arr(n);
	cin>>k;
	int target;
	for(int i=0;i<n;i++){
		cin>>arr[i];
		if(i+1==k)
		 target=arr[i];
	}
	for(int i=0;i<n;i++){
		if(arr[i]>=target&&arr[i]>=1)
			t++;
	}
	cout<<t;
	return 0;
}
 