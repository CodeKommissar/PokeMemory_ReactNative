let data = [
    {
        url: "https://pokeapi.co/api/v2/pokemon/1/",
        name: "bulbasaur"
    },
    {
        url: "https://pokeapi.co/api/v2/pokemon/2/",
        name: "ivysaur"
    },
    {
        url: "https://pokeapi.co/api/v2/pokemon/3/",
        name: "venusaur"
    },
    {
        url: "https://pokeapi.co/api/v2/pokemon/4/",
        name: "charmander"
    },
    {
        url: "https://pokeapi.co/api/v2/pokemon/5/",
        name: "charmeleon"
    }
]

const addPropertiesToArray = array => {
    let newArray = [];
    let copyArray = JSON.parse(JSON.stringify(array))

    copyArray.forEach((element, index) => {
        newArray.push(Object.assign(element, { id: "id_" + (index + 1) }));
    })
    return newArray;
    // let idNumber = 0;
    // const arrayWithProperties = [];
    // for (var index = 0; index < array.length; index++) {
    //     var element = array[index];
    //     element.imageUp = false;
    //     element.matched = false;
    //     element.id = "id_" + idNumber;
    //     idNumber++;
    //     arrayWithProperties.push(element);
    // }
    ///////////////////////////////
    // const arrayWithProperties = array.map((item, index) => {
    //     return Object.assign(item, {
    //         imageUp: false,
    //         matched: false,
    //         id: index
    //     })
    // })
}

const duplicateArray = (array) => {
    return array.concat(array);
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const splitArrayInHalf = (array) => {
    const firstHalf = array.slice(0, 5);
    const secondHalf = array.slice(5, 10);
    return [[...firstHalf], [...secondHalf]];
}

addPropertiesToArray(duplicateArray(data))
