#include <iostream>
#include <vector>
using std::vector;
using namespace std;
int main(){
	
	int n;
	cin>>n;
	int x=0;
	for(int i=1;i<=n;i++){
		string st;
		cin>>st;
		if(st[1]=='+')
			x++;
		else
			x--;
	}
	cout<<x;
	return 0;
}
 
 