#include <iostream>
#include <vector>
using std::vector;
using namespace std;
int main(){
	
	int n;
	cin>>n;
	int sol=0;
	for(int i=1;i<=n;i++){
		int x,y,z;
		cin>>x>>y>>z;
		if(x+y+z>=2)
				sol++;	
	}
	cout<<sol;
	return 0;
}
 
 