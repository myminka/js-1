const findSumOfVowelsWithClass = require("./main.js");

test("Not empty string, should return 28", () => {
    let testData = "Правильное произношение слов — одна из составляющих красивой и грамотной речи";
    let expectedCountOfVowels = 28;
    expect(findSumOfVowelsWithClass(testData)).toBe(expectedCountOfVowels);
});

test("Not empty string, should return 203", () => {
    let testData = `Термин интрузия (вталкивание, вторжение) означает внедрение магматических масс в земную кору.
    Проникнув в толщу земной коры, магматический расплав образует магматическое тело, которое застывает в течение очень длительного времени.
    В зависимости от глубины залегания интрузивные тела подразделяются на глубинные (абиссальные) и приповерхностные (гипабиссальные).
    Абиссальные интрузии имеют крупные размеры. Среди абиссальных интрузий различают батолиты, штоки, этмолиты и др. К гипабиссальным интрузиям относятся лакколиты, факолиты,
    лополиты, силлы и др.`

    let expectedCountOfVowels = 203;
    expect(findSumOfVowelsWithClass(testData)).toBe(expectedCountOfVowels);
});

test("Not empty string, does not contain vowels", () => {
    let testData = `пр в т, т стр к б з гл снх`;

    let expectedCountOfVowels = 0;

    expect(findSumOfVowelsWithClass(testData)).toBe(expectedCountOfVowels);
});

test("Not empty string, not russain language", () => {
    let testData = `The word geography comes from the Greek words meaning “Earth description.” Several
    thousand years ago many scholars were indeed “Earth describers,” and therefore geographers, more than anything else. Nonetheless, over the centuries there was a trend away
    from generalized Earth description toward more specialized disciplines—such as geology,
    meteorology, economics, and biology—and so geography as a field of study was somewhat overshadowed. Over the last few hundred years, however, geography reaffirmed its
    place in the academic world, and today geography is an expanding and flourishing field of study.`;

    let expectedCountOfVowels = 0;

    expect(findSumOfVowelsWithClass(testData)).toBe(expectedCountOfVowels);
});