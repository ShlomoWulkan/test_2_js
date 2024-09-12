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

