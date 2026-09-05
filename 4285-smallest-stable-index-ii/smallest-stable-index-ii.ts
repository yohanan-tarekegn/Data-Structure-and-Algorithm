function firstStableIndex(nums: number[], k: number): number {
    let prefmax:number[]=[];
    let suffmin:number[]=[];
    prefmax[0]=nums[0];
    let n=nums.length;
    suffmin[n-1]=nums[n-1];
    for(let i=1;i<n;i++){
        prefmax[i]=Math.max(prefmax[i-1],nums[i]);
    }
    for(let i=n-2;i>=0;i--){
        suffmin[i]=Math.min(suffmin[i+1],nums[i]);
    }
    for(let i=0;i<n;i++){
        if(prefmax[i]-suffmin[i]<=k)
        return i;
    }
    return -1;
};