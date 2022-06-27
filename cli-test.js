// Compare the triplets
const compareTriplet = (a, b) => {
  let resultA = 0;
  let resultB = 0;
  for (let i = 0; i < 3; i++) {
    if (a[i] > b[i]) resultA += 1;
    if (a[i] < b[i]) resultB += 1;
  }
  return `${resultA} ${resultB}`;
};

// console.log('Compare the triplets :', compareTriplet([5,10,7], [3,6,10]));

// Check prime
const isPrime = (num) => {
  for (let i = 2; i < num / 2; i++) {
    // console.log(i); // uncomment this to know the divided number
    if (num % i === 0) return false;
  }
  return num > 1;
};

const num1 = 137;
const num2 = 237;
// console.log(`Is ${num1}prime :`, isPrime(num1));
// console.log(`Is ${num2}prime :`, isPrime(num2));

// Remove duplicate
const removeDuplicate = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length - 1; i < j; j--) {
      if (arr[i] === arr[j]) arr.splice(j, 1);
    }
  }
  return arr;
};

// console.log('Remove duplicate :', removeDuplicate([1,3,3,3,3,3,1,3,3,1,1,1,5,6,7,9,6,10,6,10,10,1,1,2]));
// console.log('Remove duplicate :', removeDuplicate([1,3,3,3,1,5,6,7,8,1]));

// Reverse in place
const reverse = (str) => {
  let reverseStr = [];
  let splitStr = str.split(' ');
  for (let i = 0; i < splitStr.length; i++) {
    let eachStr = splitStr[i].split('').reverse().join('');
    reverseStr.push(eachStr);
  }
  return reverseStr.join(' ');
};

// console.log('Reverse in place :', reverse('what is your name'));
// console.log('Reverse in place :', reverse('red dead redemption yeah'));

// First no repeating char
const character = (str) => {
  let newStr = str.split('').filter((item) => item !== ' ');
  for (let i = 0; i < newStr.length; i++) {
    if (
      newStr.indexOf(newStr[i]) == i &&
      newStr.indexOf(newStr[i], i + 1) == -1
    )
      return newStr[i];
  }

  return null;
};

// console.log('No repeating character :', character('the quick brown fox jumps then quickly blow air'));
