function ABCheck(str) {
	var isSeparatedByThree = false;
	for (var i = 0; i < str.length - 3; i++) {
		if (str[i] == 'a' && str[i+4] == 'b') {
			isSeparatedByThree = true;
		}
	}
	return isSeparatedByThree;
}
