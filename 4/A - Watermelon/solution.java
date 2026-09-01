var input = readline();
if (input) {
    var w = parseInt(input, 10);
    if (w > 2 && w % 2 === 0) {
        print("YES");
    } else {
        print("NO");
    }
}