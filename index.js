// a. Scrie o functie care afiseaza toate elementele divizibile cu 7 din array
function displayDivisibleElements(array) {
  console.log("Elementele divizibile cu 7 sunt: ")
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 7 == 0) {
      console.log(array[i])
    }
  }
}
displayDivisibleElements([11, 22, 14, 19, 21, 28])


// b. Scrie o functie care afiseaza in ordine inversa toate elementele mai mari decat 50
function displayElementsBiggerThan50(array) {
  console.log("Ordinea inversa a elementelor mai mari decat 50 este: ")
  for (let i = array.length; i >= 0; i--) {
    if (array[i] > 50) {
      console.log(array[i])
    }
  }
}
displayElementsBiggerThan50([33, 44, 55, 66, 77]);


// c. Scrie o functie care afiseaza in ordine inversa toate elementele care se afla in intervalul [50,100] (adica elementul sa fie mai mare ca 50 si mai mic ca 100)
function displayElementsBetween50And100(array) {
  console.log("Ordinea inversa a elementelor din intervalul [50, 100] este: ");
  for (let i = array.length; i >= 0; i--) {
    if (array[i] > 50 && array[i] < 100) {
      console.log(array[i]);
    }
  }
}
displayElementsBetween50And100([90, 23, 44, 67, 88, 3, 56]);


// d.1. Scrie o functie care afiseaza doar primul element par si primul element divizibil cu 5 din array
// Sfat: foloseste variabile booleene
function displayFirstEvenElmAndDivisibleWith5(array) {
  let isEven = false;
  let isOdd = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && isEven == false) {
      console.log('Primul element par este ', array[i]);
      isEven = true;
    }
    if (array[i] % 5 == 0 && isOdd == false) {
      console.log('Primul element divizibil cu 5 este ', array[i]);
      isOdd = true;
    }
  }
}
displayFirstEvenElmAndDivisibleWith5([22, 25, 36, 55, 12, 47]);


// d.2 Scrie o functie care afiseaza primul si ultimul element par
// Sfat: optiunea 1: foloseste variabile booleene, optiunea 2: foloseste 2 indici de parcurgere: i si j.
function displayFirstAndLastEvenNumber(array) {
  for (let i = 0, j = array.length - 1; j >= 0; i++, j--) {
    if (array[i] % 2 == 0) {
      console.log("Primul element par este ", array[i]);
    }
    if (array[j] % 2 == 0) {
      console.log("Ultimul element par este ", array[j]);
      return;
    }
  }
}
displayFirstAndLastEvenNumber([52, 44, 54, 56, 28, 32, 65]);


// e. Scrie o functie care afiseaza toate elementele negative din array
function displayNegativeNo(array) {
  console.log("Numerele negative sunt: ")
  for (let i = 0; i < array.length; i++) {
    if (array[i] < 0)
      console.log(array[i])
  }
}
displayNegativeNo([-4, 5, 6, 7, -13, -23, 44]);


// f. Scrie o functie care afiseaza toatele elementele din array in ordine normala si in ordine inversa intr-o singura parcurgere (cu un singur for)
// Sfat: foloseste 2 variabile in for (2 indici de parcurgere: i si j)
function displayAllElements(array) {
  for (let i = 0, j = array.length - 1; j >= 0; i++, j--) {
    console.log("Ordinea normala a elementelor este: ", array[i]);
    console.log("Ordinea inversa a numerelor este: ", array[j]);
  }
}
displayAllElements([2, 3, 4, 6])


// g. Scrie o functie care returneaza cel mai mare element din array
function getMaxElement(array) {
  let max = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}
console.log("g. Cel mai mare element din array este ", getMaxElement([55, 23, 88, 21, 26]));


// h. Scrie o functie care returneaza cel mai mic element par din array
function getMinElement(array) {
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return min;
}
console.log("h. Cel mai mic element din array este ", getMinElement([34, 23, 67, 89, 43]));


// i. Scrie o functie care afiseaza cel mai mare element par din array si cel mai mic element impar din array
function getMaxAndMinOddElement(array) {
  let max = array[0];
  let min = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0 && array[i] > max) {
      max = array[i];
      console.log("Cel mai mare element par din array este ", max);
    }
    if (array[i] % 2 !== 0 && array[i] < min) {
      min = array[i];
      console.log("Cel mai mic element impar din array este ", min);
    }
  }
}
getMaxAndMinOddElement([44, 55, 76, 87, 9, 14]);


// j. Scrie o functie care afiseaza toate elementele mai mari decat 100 pana la primul element care nu indeplineste conditia
// Input: [101, 222, 344, 5, 7 123, 456] => Output: afisare: 101, 222, 344
function displayAllElmBiggerThan100(array) {
  console.log("Elementele mai mari decat 100 sunt: ")
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      console.log(array[i])
    }
    if (array[i] < 100) {
      return;
    }
  }
}
displayAllElmBiggerThan100([122, 144, 545, 342, 23, 45, 566, 6657]);


// k. Scrie o functie care returneaza suma elementelor divizibile cu 3 sau divizibile cu 5 dar sa nu fie dizibile si cu 3 si cu 5
// Input: [3, 4, 5, 15, 6,35] => Output: sum = 3+5+6 = 14
function computeSumOfElmDivWith3(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 3 == 0 || array[i] % 5 == 0) && !(array[i] % 5 == 0 && array[i] % 3 == 0)) {
      sum = sum + array[i];
    }
  }
  return sum;
}
console.log("Suma numerelor divizibile cu 3 sau 5 este ", computeSumOfElmDivWith3([3, 4, 5, 6, 22, 15, 45, 10]));


//l.Scrie o functie care afiseaza indexi elementelor divizibile cu 3
function displayIndexElmDivWith3(array) {
  console.log("Indexul elementelor divizibile cu 3 este: ")
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0) {
      console.log(i)
    }
  }
}
displayIndexElmDivWith3([2, 3, 6, 7, 9, 12])

// m. Scrie o functie care afiseaza in ordine inversa indexi elementelor mai mici decat 10
function displayIndexSmallerThan10(array) {
  console.log("Indexi elementelor mai mici decat 10 sunt:")
  for (let i = array.length; i >= 0; i--) {
    if (array[i] < 10) {
      console.log(i)
    }
  }
}
displayIndexSmallerThan10([33, 1, 22, 9, 12, 11, 5]);


// n. Scrie o functie care afieaza elementele prime din array
// Sfat: implementeaza o functie care verifica daca un numar este prim sau nu si foloseste-o (apeleaz-o pentru a verifica elementele prime) in verificarea din parcurgerea array-ului
function isPrime1(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
console.log('Numarul este prim: ', isPrime1(4))

function isPrime2(num) {
  isPrime = true;
  if (num <= 1) {
    isPrime = false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}
console.log('Numarul este prim: ', isPrime2(5));

function isPrime3(num) {
  isPrime = true;
  if (num <= 1) {
    isPrime = false;
  }
  for (let i = 2; i < num && isPrime; i++) {
    if (num % i === 0) {
      isPrime = false;
    }
  }
  return isPrime;
}
console.log('Numarule este prim ', isPrime3(17))
console.log('Numarule este prim ', isPrime3(15))

//Afisarea elementelor din array prin apelarea functiei de mai sus.
function displayPrimeElm(array) {
  for (let i = 0; i < array.length; i++) {
    if (isPrime3(array[i])) {
      console.log(array[i])
    }
  }
}
displayPrimeElm([2, 5, 7, 9, 10]);


// o. Scrie o functie care modifica alementele array-ului adunand numarul 10 la fiecare si returneaza array-ul
// Input: [10, 22, 4, 5, 7] => Output: [20, 32, 14, 15, 17]
function changeElements(array) {
  console.log("Numerele noi sunt: ")
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] + 10;
  }
  return array;
}
console.log(changeElements([3, 5, 6]));


// q. Scrie o functie care tranforma fiecare element pozitiv in element negativ si invers si returneraza array-ul
function changeAllElementsPositivesOrNegatives(array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = -array[i]
  }
  return array;
}
console.log('Numere schimbate din - in + si invers, sunt: ', changeAllElementsPositivesOrNegatives([22, 32, -15, 1, -2]));


// r. Scrie o functie care formeaza un string din elementele unui array.Dupa fiecare element par se insereaza si caracterul “-”
function createElm(array) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if ((array[i] % 2 === 0)) {
      result += array[i] + '-';
    } else {
      result += array[i];
    }
  }
  return result;
}
console.log(createElm([3, 5, 4, 3, 2, 2, 6, 7, 8]));


// s.Scrie o functie care schimba literele unui string din litere mari in litere mici si invers.
function changeLowerAndUpperCase(array) {
  let str = [];
  for (let i = 0; i < array.length; ++i) {
    if (array[i] == array[i].toUpperCase()) {
      str += array[i].toLowerCase();
    } else if (array[i] == array[i].toLowerCase()) {
      str += array[i].toUpperCase();
    } else {
      str += array[i];
    }
  }
  return str;
}
console.log("Noul string este: ", changeLowerAndUpperCase('ele MERG La ciNeMa'))


// t. Scrie o functie care gaseste toate perechile de numere dintr-un array a carei suma este mai mare ca 10
function displayPairsWhoHaveSumBiggerThan10(array) {
  console.log('Perechile a caror suma este mai mare decat 10 sunt:')
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] > 10) {
        console.log(array[i], " si ", array[j]);
      }
    }
  }
}
displayPairsWhoHaveSumBiggerThan10([2, 1, 5, 7, 3, 5, 6]);


// u. Scrie o functie care returneaza elementele duplicate dintr-un array
function findDuplicates(array) {
  console.log("Elementele duplicate sunt:");
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] == array[j]) {
        console.log(array[i]);
      }
    }
  }
}
findDuplicates([2, 5, 4, 2, 6, 5, 7]);


// v. Scrie o functie care sa afiseze cate numere pare si cate numere impare sunt in array
function computeContorEvenAndOddNumbers(array) {
  let contor = 0;
  let contor1 = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      contor++;
    }
    if (array[i] % 2 != 0) {
      contor1++;
    }
  }
  console.log('Numerele pare sunt in total ', contor)
  console.log('Numerele impare sunt in total ', contor1)
}
computeContorEvenAndOddNumbers([31, 22, 33, 12, 1, 5, 7, 8]);


// w. Scrie o functie care adauga element nou la un array
function addNewElement(array) {
  array.push(14);
  console.log(array);
}
addNewElement([45, 55, 4]);


// x. Scrie o functie care returneaza cel mai apropiat element de un alt numar trimis ca parametru
// Input:( [10, 22, 4, 5, 7], 15) => Output:10
function nearToElement(array, x) {
  let curr = array[0];
  let diff = Math.abs(x - curr);
  for (let i = 0; i < array.length; i++) {
    let newDiff = Math.abs(x - array[i]);
    if (newDiff < diff) {
      diff = newDiff;
      curr = array[i];
      return curr;
    }
  }
}
console.log('Cel mai apropiat element este ', nearToElement([3, 22, 32, 12, 45], 20));


// y. Scrie o functie care afiseaza produsul a cate 2 numere consecutive din array. Daca numarul de elemente este impar, ultimul produs va fi numarul insusi
// Input::  [1, 7, 3, 10, 9] => Output:: 7, 30, 9. Explicatie: (7 = 1*7, 30 = 3*10, 9 = 1* 9)
function computeProduct(array) {
  let prod = 1;
  for (let i = 0; i <= array.length - 2; i += 2) {
    if (i < array.length) {
      prod = array[i] * array[i + 1];
      console.log(prod);
    }
  }
  if (array.length % 2 != 0) {
    console.log(array[array.length - 1]);
  }
}
computeProduct([4, 5, 6, 7, 4, 1, 2]);


// z. Scrie o functie care afiseaza “foo” pentru fiecare element divizibil cu 3, “buzz” pentru fiecare element divizibil cu 5, “fb” pentru fiecare element divizibil si cu 3 si cu 5 iar pentru retul elementelor sea afiseaza valoarea lor.
// Input::  [1, 7, 3, 10, 4, 15] => Output::1, 7, foo, buzz, 4, fb
function displayFooBuzzFb(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 == 0 && array[i] % 5 != 0) {
      console.log("foo")
    }
    if (array[i] % 5 == 0 && array[i] % 3 != 0) {
      console.log("buzz")
    }
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      console.log("fb")
    }
    else if (array[i] % 3 != 0 && array[i] % 5 != 0) {
      console.log(array[i])
    }
  }
}
displayFooBuzzFb([3, 7, 12, 15, 14, 35]);