#include <iostream>
#include <vector>
#include <set>           // std::set
#include <unordered_set> // std::unordered_set   
 
using namespace std;
 
int main() {
	unordered_set<char> x;
	string y;
	cin>>y;
    for(int i=0;i<y.size();i++){
    	x.insert(y[i]);
	}
	string ans=x.size()%2==0?"CHAT WITH HER!":"IGNORE HIM!";
	cout<<ans;
    return 0;
}