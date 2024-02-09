// exercise1

let action = "move";

switch (action) {
    case "move":
        alert("You are moving!");
        break;
    case "jump":
        alert("You are jumping!");
        break;
    case "run":
        alert("You are running!");
        break;
    default:
        alert("Invalid action.");

}


// exercise2

let vegetables = prompt("Enter 'Carrot' or 'Broccoli'");
{
    switch (vegetables) {
        case "Carrot":
            alert("Hello")
            break;
        case "Broccoli":
            alert("Welcome")
            break;
    }
}

{
    switch (vegetables) {
        case "Broccoli":
            alert("Hello")
            break;
        case "Carrot":
            alert("Welcome")
            break;
        default:
            alert("Neither");
    }
}



// exercise3

let age = prompt("Enter your age")
if (age < 18) {
    alert("არ შეგიძლია ხმის მიცემა!");
}
else {
    alert("შეგიძლია მისცე ხმა!");
}


// exercise4

function password_control(password){
    if(password.length < 3){
        return "უვარგისი";
    }
    else if(password.length >= 3 && password.length <= 6){
        return "სუსტი";
    }
    else if(password.length > 6 && password.length <= 8){
        return "მისაღები";
    }
    else if(password.length > 8 && password.length <= 16){
        return "ძლიერი";
    }
    else if(typeof password === typeof 1){
        return "უვარგისი";
    }
};




// exercise5

function quiz(){
count = 0;
let question1 = prompt( "2. What country has the highest life expectancy?")

if(question1 === "Hong Kong"){ 
    let question2 = prompt("2.Where would you be if you were standing on the Spanish Steps?");
    count++;

    if(question2 === "Rome"){
        let question3 = prompt("3.Which language has the more native speakers: English or Spanish?");
        count++;


        if(question3 === "Spanish"){
            let question4 = prompt("4.What is the most common surname in the United States?");
            count++;


            if(question4 === "Smith"){
                let question5 = prompt("5.What disease commonly spread on pirate ships? ");
                count++;

                
                if(question5 === "Scurvy"){
                    alert("You've answered right to the all questions");
                }else{
                    alert(`${count} right answers`);    
                }
            }else{
                alert(`${count} right answers`);
            }
        }else{
            alert(`${count} right answers`);
        }
    }else{
        alert(`${count} right answers`);
    }
}else{
    alert(`${count} right answers`);
};
}
quizz();



