#include <iostream>
#include <vector>
#include <set>           // std::set
#include <unordered_set> // std::unordered_set   
#include <algorithm>
#include <cmath>
  
 
using namespace std;
 
int main() {
	
	int x;
	cin>>x;
	int y=0;
	y+=floor(x/5);
	x=x%5;
	y+=floor(x/4);
	x=x%4;
	y+=floor(x/3);
	x=x%3;
	y+=floor(x/2);
	x=x%2;
	y+=x;
	cout <<y;
    return 0;
}