#include <iostream>
#include <string>
#include <algorithm>
#include <cctype>
using namespace std;
 
 
int main() {
   string t,s;
   cin>>s>>t;
    
    // Convert to lowercase
    transform(t.begin(), t.end(), t.begin(), ::tolower);
    transform(s.begin(), s.end(), s.begin(), ::tolower);
    
    int x=s<t?-1:s>t?1:0;
    cout<<x;
    return 0;
}   