#include <iostream>
#include <vector>
#include <set>           // std::set
#include <unordered_set> // std::unordered_set   
#include <algorithm>
#include <cmath>
  
 
using namespace std;
 
int main() {
	
	double x,y;
	if (!(cin >> x >> y) || x <= 0 || y <= 0) return 0;
	double val=(log(y)-log(x))/log(1.5);
	int ans=round(val);
	if((x*pow(3,ans))>(y*pow(2,ans)))
		cout<<ans;
	else
		cout <<ans+1;
    return 0;
}