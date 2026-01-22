var isDate = function (input) {
  //   write your code here
	  if (!input) return false;

  input = input.trim(); // ⭐ IMPORTANT FIX

  if (input === null || input === undefined) return false;

  input = String(input).trim(); // ✅ SAFE

  return /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/.test(input);
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
