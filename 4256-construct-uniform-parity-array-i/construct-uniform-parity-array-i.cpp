class Solution {
public:
	bool uniformArray(vector<int>& nums1) {
		vector<int> nums2;
        if(nums1.size()==1)return true;
		bool hasodd=false;
		for(int i=0;i<nums1.size();i++){
			if(nums1[i]%2!=0){
				hasodd=true;
				break;
			}
		}
		for(int i=0;i<nums1.size();i++){
			for(int j=0;j<nums1.size();j++){
				if(j==i)continue;
				if(hasodd){
					if(nums1[i]%2!=0){
						nums2.push_back(nums1[i]);
						break;
					}
					else{
						if((nums1[i]-nums1[j])%2!=0){
							nums2.push_back(nums1[i]-nums1[j]);
							break;
						}
						else{
							continue;
						}
					}
				}
				else{	
						nums2.push_back(nums1[i]);
						break;
				
				}
				
			}
		}
		return nums1.size()==nums2.size()?true:false;
	}
};


