// exercise1

// შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე. შეასრულეთ ეს დავალება ციკლების მეშვეობით.


const variables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i = 0;
while (i < numbers.length) {
    if (i === 2 || i === 5 || i === 8) {
        console.log(numbers[i]);
    }
    i++;
}


for (let i = 0; i < numbers.length; i++) {
    if (i === 2 || i === 5 || i === 8) {
        console.log(numbers[i]);
    }
};


// exercise2

// შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
  function from_ten_to_one () {
    let count = 10;
    while (count > 0) {
      console.log(count);
      count--;
    }
  }


// exercise3

// მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს: ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.

let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
let i = 0;
    while (i < names.length) {
        if (names[i] === 'Bob') {
            delete names[i];
        }
        console.log(names);
    }


    // exercise4
    // ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს, მაგ. შექმენით ფუნქცია სახელით: fun და პარამეტრებით: number, power, მაგ. თუ რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.


    let fun(number, power)
    let count = 0;
    while (count < power) {
        result = result * number;
        count++;
      }
    
      
    //   exercise5
//     შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.
// მაგ. 


    function fizzB() {
        count = 1;
        while (count < 100) {
          if (count % 3 === 0) {
            console.log(`${count} Fizz`);
          } else if (count % 5 === 0) {
            console.log(`${count} Buzz`);
          } else if (count % 3 === 0 && count % 5 === 0) {
            console.log(`${count} Fizz`);
          } else {
            console.log(count);
          }
          count++;
        }
      }


       //for loop
function factorialCalculator2(number) {
    let result = 1;
    if (number === 0 || number === 1) {
      return result;
    } else if (number > 1) {
      for (let i = 1; i <= number; i++) {
        result *= i;
        console.log(result);
      }
    }
  }

     


    //   exercise6
    // შექმენით ფუნქცია,მაგ. სახელით: factorialCalculator(number), რომელიც დაიანგარიშებს და ეკრანზე გამოიტანს მისთვის პარამეტრის სახით მიწოდებული რიცხვის ფაქტორიალს, მაგ. 5! => 2*3*4*5 = 120, 



    function factorialCalculator(number) {
        let result = 1;
        count = 1;
        if (number === 0 || number === 1) {
          return result;
        } else if (number > 1) {
          while (count <= number) {
            result *= count;
            count++;
          }
        }


        
    }