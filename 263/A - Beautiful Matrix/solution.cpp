#include <iostream>
#include <vector>
using std::vector;
using namespace std;
int main(){
	
	int r=5,c=5;
	int pos1[2];
	int matrix[r][c];
	for(int i=0;i<r;i++){
		for(int j=0;j<c;j++){
			cin>>matrix[i][j];
			if(matrix[i][j]==1){
				pos1[0]=i;
				pos1[1]=j;
			}
		}
	}
	r=pos1[0];
	c=pos1[1];
	cout<<abs(c-2)+abs(r-2);
	return 0;
}
 