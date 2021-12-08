// 1


const cutString = (str, max) => {
    return str.length <= max ? str : str.slice(0, max) + '...';
};

console.log(cutString('foo', 2));

// 2

const arr = [4,4,4,4,44,4,2,2,2,2,2,3];

const repeatVal = (arr) => {
    const obj = arr.reduce((acc, n) => (
        acc[n] = (acc[n] || 0) + 1, acc
    ), {});
    const count = Object.values(obj).map(num => +num);
    return Math.max.apply(Math, count);
};

console.log(repeatVal(arr));


// 3


const mass = ['hello', 1, false]

const convertMassIntoObj = (arr) => {
    return arr.map((item, index) => ({
        value: item,
        type: typeof item,
        index
    }));
};

console.log(convertMassIntoObj(mass));


// 4


const users = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'female',
        ip_address: '26.58.193.2',
    },
    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'male',
        ip_address: '229.179.4.212',
    },
];
  

const sortUsers = (arr) => {
    let men = [];
    let women = [];

    arr.forEach(user => {
        const {first_name, last_name, ...newUser} = user;

        newUser.fullName = first_name + ' ' + last_name;

        if(user.gender === 'male') {
            men.push(newUser);
        } else {
            women.push(newUser);
        }

        return newUser;
    });

    return {men, women};
};

console.log(sortUsers(users));


// 5


const videos = [{
    id: 65432445,
    title: "The Chamber"
   }, {
    id: 675465,
    title: "Fracture"
   }, {
    id: 70111470,
    title: "Die Hard"
   }, {
    id: 654356453,
    title: "Bad Boys"
}];

const massToObj = (arr) => {
    return arr.reduce((acc, item) => (
        acc[item.id] = item.title, acc
    ), {});
};

console.log(massToObj(videos));


// 6


const newReleases = [{
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
   }, {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
   }, {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
   }, {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
}];

const ratingMoreThan5 = (arr) => {
    return arr.filter(item => item.rating[0] === 5.0).map(item => item.id);
};

console.log(ratingMoreThan5(newReleases));


// 7


const boxarts = [
    {
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    }, 
    {
      width: 150,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    }, 
    {
      width: 300,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
  }, 
    {
      width: 425,
      height: 150,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }
  ];

  const maxSquare = (arr) => {
      return arr.map(item => ({
          square: item.width * item.height,
          ...item
      })).reduce((acc, item) => {
         return acc.square > item.square ? acc : item.url; 
      })
  };

  console.log(maxSquare(boxarts));


   
   
   

