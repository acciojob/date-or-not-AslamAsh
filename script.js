var isDate = function (input) {
  //   write your code here
	 return /^(0[1-9]|[12][0-9]|3[01])\/
         (0[1-9]|1[0-2])\/\d{4}$/.test(date);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
