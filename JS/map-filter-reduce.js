const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }

];
let threeLanguages = users.filter(function (user){
    return user.languages.length >= 3;
});
console.log(threeLanguages)

let emails = users.map(function (user){
    user = user.email;
    return user;
});
console.log(emails);

let es6emails = users.map(user => user.email);

const yearsOfExperience = users.reduce(function (accumulator, experience) {
    accumulator.push(experience.yearsOfExperience);
    return accumulator;
}, []);

console.log(yearsOfExperience);

let totalYearsOfExperience = users.reduce(function (total, user){
    let yearsOfExperience = user.yearsOfExperience;
    return total + yearsOfExperience;
}, 0);

console.log(totalYearsOfExperience);
let average = totalYearsOfExperience/ users.length
console.log(average)

let emailsViaReduce = users.reduce(function (accumulator, user){
    accumulator.push(user.email);
    return accumulator;
}, []);

let longestEmail = users.reduce(function (accumulator, user, index, userArray){
    if (index === userArray.length -1){
        accumulator.push(user.email);
        accumulator.sort(function (email1, email2){
            return email2.length - email1.length
        });
        return accumulator[0];
    } else {
        accumulator.push(user.email);
        return accumulator;
    }

},[]);

console.log(longestEmail);

let names = users.reduce(function (accumulator, user){
    accumulator.push(user.name);
    return accumulator;
}, []);

let namesString = users.reduce(function (accumulator, user, index, usersArray){
    if(index === usersArray.length -1) {
        accumulator.push(user.name);
        let namesJoin = accumulator.join(', ');
        namesJoin = "Your instructors are: " + namesJoin + ".";
        return namesJoin;
    } else {
        accumulator.push(user.name);
        return accumulator;
    }
}, []);

console.log(namesString);