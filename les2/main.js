// 1


const uniqueItemsInArr = (arr) => {
    return Array.from(new Set(arr));
};
    
console.log(uniqueItemsInArr([1,1,1,2,2,3,3,3,4 ]));

    
// 2

    
const findOddSingleNum = (numberList) => {

    const numberMeetingMap = numberList.reduce((result, currentNum) => (

        result[currentNum] = (result[currentNum] || 0) + 1, result

    ), {});

    return +Object.keys(numberMeetingMap).reduce((result, key) => {

        return key % 2 === 0 ? key : result;

    });
};

console.log(findOddSingleNum([0,1,0,1,0]));


// 3


const transformToSingleNum = (num) => {

    const arrOfNum = num.toString().split('');

    return arrOfNum.reduce((prevNum, currentNum) => {

        while(arrOfNum.length > 1) {
            const res = +prevNum + +currentNum;
            return +transformToSingleNum(res);
        };

    });
};

console.log(transformToSingleNum(2222));


// 4


Array.prototype.myCustomMap = function(callBack) {

    let mass = [];
    const obj = Object(this)

    for(let i = 0; i < obj.length; i++) {

        if(i in obj) {
            mass[i] = callBack.call(this, this[i], i, obj);
        };

    };

    return mass;
};

console.log([1, 2, 3].myCustomMap(num => num * 2));


// 5


Array.prototype.myCustomFilter = function (callback) {

    if (this === null) throw new Error(`Cant iterate iver undefined or null`);
    if (typeof callback !== 'function') throw new Error(`not a function`);

    const result = [];
    const listItem = Object(this);

    for (let i = 0; i < listItem.length; i++) {

        if (i in listItem) {

            const currentItem = this[i];

            if (callback.call(this, currentItem, i, listItem)) {
                result.push(currentItem);
            };

        };

        return result;
    };
};

console.log([1,2,3].myCustomFilter(num => num > 2));


// 6


const baseUrl ='https://pokeapi.co/api/v2/pokemon/';

const getPokemons = async (url) => {

    try {

        const res = await fetch(url);

        return await res.json();

    } catch(e) {
        console.error(e);
    };
};

getPokemons(baseUrl)
    .then(data => console.log(data.results))
    .catch();


// 7


const getPokemonDesc = async (name) => {

    try {

        const res = await fetch(`${baseUrl}${name}`);

        return await res.json();

    } catch(e) {
        console.log(`Покемон ${name} не найден`);
    }

};

getPokemonDesc('ditto')
    .then(data => console.log(data))
    .catch();


// 8


getPokemons(baseUrl)
    .then(data => data.results.map(pokemon => {
        return getPokemons(pokemon.url);
    }))
    .then(res => Promise.all(res).then(res=> console.log(res)))
    .catch();


// 9


const getValue = (value, time = 0) => {

    return new Promise((res, rej) => {

        try {
            setTimeout(() => res(value), time);
        } catch(e) {
            rej(e);
        };

    });

};

getValue('hello', 2000).then(data => console.log(data));