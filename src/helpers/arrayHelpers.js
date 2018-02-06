export const addPropertiesToArray = array => {
    const arrayCopy = JSON.parse(JSON.stringify(array))
    return arrayWithProperties = arrayCopy.map((item, index) => {
        return Object.assign(item, {
            imageUp: false,
            matched: false,
            id: "id_" + index
        })
    })
}

export const duplicateArray = (array) => {
    return array.concat(array);
}

export const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export const splitArrayInHalf = (array) => {
    const firstHalf = array.slice(0, 5);
    const secondHalf = array.slice(5, 10);
    return [[...firstHalf], [...secondHalf]];
}