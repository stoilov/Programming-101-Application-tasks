function DashInsert(num) {
	var digits = num.toString().length;
	var str = '';
	for (var i = 0; i < digits; i++) {
		var lastDigit = num % 10;
		str = lastDigit + str;
		num = parseInt(num / 10);
		var secondToLast = num % 10;
		if (secondToLast % 2 != 0 && lastDigit % 2 != 0) {
			str = '-' + str;
		}
	}
	return str;
}
