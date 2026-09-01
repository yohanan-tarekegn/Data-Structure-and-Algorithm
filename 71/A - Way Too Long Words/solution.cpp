#include <iostream>
#include <string>
using namespace std;
 
int main() {
	int n;
	cin >> n;
	
	for (int i = 0; i < n; i++) {
		string arr;
		cin >> arr;
		if (arr.size() > 10) {
			// Separate each piece with << to avoid ASCII addition
			cout << arr[0] << arr.size() - 2 << arr[arr.size() - 1] << "
";
		} else {
			cout << arr << "
";
		}
	}
	return 0;
}