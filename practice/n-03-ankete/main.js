var person = personalDataEnter();
var message = personToString(person);
alert(message);

function personalDataEnter(){
   
    var isValidName = false

    while(!isValidName){
        var name = prompt("Enter your full name(name, surname and fathername):")
        
        if (name !== null){
            var wordsCount = name.split(" ").length
        }
        
        if (wordsCount === 3 || wordsCount === 2){
            isValidName = true
        }
        else{
            alert("Enter valid name! In format 'Name Surname Fathername(optional)'")
        }
    }

    var isValidAge = false

    while(!isValidAge){
        var age = prompt("Enter your age:")

        if (age > 0 && age < 150){
            isValidAge = true
        }
        else{
            alert("Incorrect age range")
        }
    }

    var gender = confirm("Are you male?")

    var person = {
        name: name,
        age: age,
        isMale: gender,
    }   

    return person;
}

function personToString(person){
    var message = 
    `Ваше ФИО: ${person.name}
Ваш возраст в годах: ${person.age}
Ваш возраст в днях: ${person.age * 365}
Через 5 лет вам будет: ${Number(person.age) + 5}
Ваш пол: ${person.isMale ? "мужской" : "женский"}
Вы на пенсии: ${isRetired(person.isMale, person.age) ? "да" : "нет"}`

    return message;
}

function isRetired(isMale, age){
    if (isMale && age >= 63){
        return true;
    }
    else {
        if (age >= 60){
            return true;
        }
    }

    return false;
}