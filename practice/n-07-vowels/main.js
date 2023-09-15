const VowelsDictionary = require("./vowelDictionary.js");

function findSumOfVowelsWithClass(str){
    
    var dictionary = new VowelsDictionary();
    
    for (let index = 0; index < str.length; index++){
        let key = str[index];
        if (key in dictionary){
            dictionary[key]++;
        }
    }

    var sumOfVowels = 0;

    for(let key in dictionary){
        sumOfVowels += Number(dictionary[key]);
    }

    return sumOfVowels;
}

module.exports = findSumOfVowelsWithClass;