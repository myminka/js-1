function generateRandomColor(){
    return Math.floor(Math.random()*16777215).toString(16).toUpperCase();
}

function generateColorsWithObject(colorsCount){
    if (colorsCount < 0){
        alert("Invalid data, colors count should be greater than 0");
    }

    var colorsObject = new Object();

    for (let index = 0; index < colorsCount;){
        var randomColor = generateRandomColor();
        var isUnique = true;

        for (let key in colorsObject){
            if (key === randomColor){
                isUnique = false;
                break;
            }
        }

        if(isUnique){
            colorsObject[randomColor]=randomColor;
            index++;
        }
    }

    return colorsObject;
}

function generateColorsWithSet(colorsCount){
    if (colorsCount < 0){
        alert("Invalid data, colors count should be greater than 0");
    }

    var colorsSet = new Set();
    
    for (let index = 0; index < colorsCount;){
        var randomColor = generateRandomColor();

        if (!colorsSet.has(randomColor)){
            colorsSet.add(randomColor);
            index++;
        }
    }

    return colorsSet;
}

var objectCount = {
    colorsCount_1: 1,
    colorsCount_10: 10,
    colorsCount_100: 100,
    colorsCount_1000: 1000,
    colorsCount_10000: 10000
}

for (var key in objectCount){
    var colorsCount = objectCount[key];

    const perf1 = performance.now();
    var set = generateColorsWithSet(Number(colorsCount));
    const perf1End = performance.now();

    const perf2 = performance.now();
    var object = generateColorsWithObject(Number(colorsCount));
    const perf2End = performance.now();

    console.log(`execution time with ${colorsCount} colors, generation using set ${perf1End - perf1} ms`);
    console.log(`execution time with ${colorsCount} colors, generation using object ${perf2End - perf2} ms`);
}
