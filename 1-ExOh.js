function ExOh(str) {
    var xCount = 0;
    var oCount = 0;
    while (str.length != 0) {
        var lastChar = str.substr(str.length - 1);
        if (lastChar === 'x') {
            xCount++;
        }
        if (lastChar === 'o') {
            oCount++;
        }
        str = str.substring(0, str.length - 1);
    }
    if (xCount == oCount) {
        return true;
    }
    else {
        return false;
    }
}
