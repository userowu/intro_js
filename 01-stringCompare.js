var birthMonth = "November";
var firstMonth = "January";

console.log(birthMonth);

function compareStrings(string1, string2) {

  if (birthMonth == firstMonth) {
  alert('Your birth month and the first month of the year are the same!')

} else {
  alert('Your birth month and the first month of the year are different!')
  }
}

compareStrings(birthMonth, firstMonth);
