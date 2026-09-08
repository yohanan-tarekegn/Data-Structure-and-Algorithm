#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
 
using namespace std;
 
int main() {
    string y;
    if (!(cin >> y)) return 0;
 
    vector<int> x;
 
    // 1. Extract digits (skipping operator characters like '+')
    for (size_t i = 0; i < y.size(); i += 2) {
        x.push_back(y[i] - '0');
    }
 
    // 2. Sort vector using iterators
    sort(x.begin(), x.end());
 
    // 3. Reconstruct string with sorted numbers
    string result = "";
    for (size_t i = 0; i < x.size(); i++) {
        result += to_string(x[i]);
        if (i + 1 < x.size()) {
            result += "+"; // Add '+' separator between numbers
        }
    }
 
    cout << result << endl;
 
    return 0;
}