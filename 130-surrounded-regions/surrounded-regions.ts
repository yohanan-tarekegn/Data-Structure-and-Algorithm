/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
    let n=board.length;
    let m=board[0].length;
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]=='O'){
                board[i][j]="E";
                checkside(i,j);
            }
        }
        if(i==n-1)break;
        i=n-1-1;
    }
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(board[j][i]=='O'){
                board[j][i]="E";
                checkside(j,i);
            }
        }
        if(i==m-1)break;
        i=m-1-1;
    }
    function checkside(i:number,j:number){
        if(i+1<n)
        if(board[i+1][j]=="O"){
            board[i+1][j]="E";
            checkside(i+1,j);
        }
        if(j-1>-1)
        if(board[i][j-1]=="O"){
            board[i][j-1]="E";
            checkside(i,j-1);
        }
        if(i-1>-1)
        if(board[i-1][j]=="O"){
            board[i-1][j]="E";
            checkside(i-1,j);
        }
        if(j+1<m)
        if(board[i][j+1]=="O"){
            board[i][j+1]="E";
            checkside(i,j+1);
        }
    }
    for(let i=0;i<n;i++){
        for(let j=0;j<m;j++){
            if(board[i][j]=="E"){
                board[i][j]="O";
                continue;
            }
            if(board[i][j]=="O")board[i][j]="X"
        }
    }
};