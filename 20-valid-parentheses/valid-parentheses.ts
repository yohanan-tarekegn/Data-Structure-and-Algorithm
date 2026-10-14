function isValid(s: string): boolean {
    let arr:string[]=[s[0]];
    let i=1;
    let n=s.length;
    if(n==1) return false;
    while(i<n){
        let x=s[i];
        i++;
        if(x=='{'||x=='['||x=='('){
            arr.push(x);
            continue;
        }
        let y=arr.pop();
        if(y=='(' && x==')')
        continue;
        else if(y=='[' && x==']')
        continue;
        else if(y=='{' && x=='}')
        continue;
        else return false;
    }
    if(arr.length==0)
    return true;
    else return false;
};