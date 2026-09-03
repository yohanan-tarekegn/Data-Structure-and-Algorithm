class Solution {
public:
    bool uniformArray(vector<int>& nums1) {
        if(nums1.size()<2)return true;
        bool hasodd=false;
        bool haseven=false;

        for(int i=0;i<nums1.size();i++){
            if(nums1[i]%2!=0){
                hasodd=true;
            }
            else haseven=true;
            if(hasodd==haseven)break;
        }
        if(hasodd!=haseven)return true;
        int minodd=INT_MAX;
        int mineven=INT_MAX;

        for(int i=0;i<nums1.size();i++){
            if(nums1[i]%2==0){
                mineven=min(mineven,nums1[i]);
            }
            else
            minodd=min(minodd,nums1[i]);
        }
        return minodd<mineven;
    }
};