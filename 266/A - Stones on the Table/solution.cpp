#include <iostream>
#include <vector>
#include <set>           // std::set
#include <unordered_set> // std::unordered_set   
#include <algorithm>
#include <cmath>
  
 
using namespace std;
 
int main() {
	
	int x;
	string y;
	cin>>x>>y;
	int z=0;
	for(int i=0;i<x-1;i++){
		if(y[i]==y[i+1])
		z++;
	}
	cout<<z;
 
    return 0;
}