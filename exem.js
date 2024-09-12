const Mission1 = (arr) => {
    const sortedArr = arr.filter(n => n % 2 === 0)
    return sortedArr
}

const Mission2 = (str) => {
    const arr = str.split(' ');
    const numOfWrdsWith4Letters = arr.reduce((sum, curr) => {
        if (curr.length === 4) {
            sum++;
        }
        return sum;
    }, 0); 
    return numOfWrdsWith4Letters;
}

const Mission3 = (matrix) => {
    const arr = matrix.flat()
    return arr
}

const Mission5 = (keysArr, valuesArr) => {
    let obj = {};
    const minLength = Math.min(keysArr.length, valuesArr.length); 
    for (let i = 0; i < minLength; i++) {
        obj[keysArr[i]] = valuesArr[i];
    }
    return obj;
};

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission5
  } // without 4 and 6
