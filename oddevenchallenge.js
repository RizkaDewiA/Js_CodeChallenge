// Expected result : [[1, 3, 5, 7, 9], [2, 4, 6, 8, 10]]
// Direction : Return nested array first is odd value and second is even array from the array number
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(number) {
  const odds = [];
  const even =[];
  const newnumber = [odds,even];
  for (const numb of number) {
    if (numb % 2 == 1) {
      odds.push(numb);
    } else {
      even.push(numb);
    }
  }
  return newnumber;
}

console.log(result(number));