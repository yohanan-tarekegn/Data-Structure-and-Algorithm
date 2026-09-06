function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let merged=[...nums1,...nums2];
    merged.sort((a,b)=>a-b);
    let n=merged.length;
    if(n%2==0){
        return (merged[n/2]+merged[n/2-1])/2;
    }
    else{
        return merged[Math.floor(n/2)];
    }  
};