export const duplicateArray = (array) => {
    return [...array, ...array];
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
    const secondHalf = array.slice(5, 10)
    return [[...firstHalf], [...secondHalf]];
}