// 1


const cutString = (text, avaliableChars) => {
    if(text.length <= avaliableChars) {
        return text;
    }
    return text.slice(0, avaliableChars) + '...';
};

console.log(cutString('helppppp', 5));

// 2

const arrOfNumbers = [1, 2, 3, 3];

const fndMostFrequentNum = (numberList) => {
    const numMeetingMap = numberList.reduce((result, num) => (
        result[num] = (result[num] || 0) + 1, result
    ), {});

    return +Object.keys(numMeetingMap).reduce((result, key) => {
        return numMeetingMap[result] > numMeetingMap[key] ? result : key;
    });

};

console.log(fndMostFrequentNum(arrOfNumbers));


// 3


const mass = ['hello', 1, false]

const getMassItemInfo = (arr) => {
    return arr.map((item, index) => ({
        value: item,
        type: typeof item,
        index
    }));
};

console.log(getMassItemInfo(mass));


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
  

const sortUsersByGender = (users) => {

    return users.reduce((result, user) => {
        const {first_name, last_name, ...otherProps} = user;
        
        const modifiedUser = {
            fullName: `${first_name} ${last_name}`,
            ...otherProps
        };

        const placeToPush = modifiedUser.gender === 'male' ? 'men' : 'women';

        result[placeToPush].push(modifiedUser);
        
        return result;
        
    }, {men: [], women: []});

};

console.log(sortUsersByGender(users));


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

const massToObj = (mass) => {
    return mass.reduce((result, item) => (
        result[item.id] = item.title, result
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

const ratingMoreThan5 = (releases) => {
    return releases.reduce((result, release) => {
        release.rating[0] === 5.0 ? result.push(release.id) : null;
        return result;
    }, []);
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

  const maxSquareUrl = (boxarts) => {

    return boxarts.reduce((previousImage, currentImage) => {

        const currentSquare =  currentImage.width * currentImage.height;
        const previousSquare = previousImage.width * previousImage.height;

        return previousSquare > currentSquare ? previousImage : currentImage; 
    }).url;
  };

  console.log(maxSquareUrl(boxarts));


   
   
   

