function lengthOfLongestSubstring(s: string): number {
    //if(s.length==1)return 1;
    let arr:string[]=[];
    let total:number=0;
    let arr2:number[]=[];
    let counter=0;
  for(let i=0;i<s.length;i++){
    if(!arr.includes(s[i])){
        arr.push(s[i]);
        total++;
    }
    else{
        arr2.push(total);
        total=0;
        i=counter++;
        arr=[];
    }
  } 
  arr2.push(total); 
  arr2.sort((a,b)=>a-b);
  return arr2[arr2.length-1];
};