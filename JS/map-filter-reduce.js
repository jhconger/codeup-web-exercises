(function() {


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
    let threeLanguages = users.filter(user => user.languages.length >=3);
    console.log(threeLanguages)

    let emails = users.map(user => user.email);
    console.log(emails);

    const yearsOfExperience = users.reduce((previousVal , currentVal) => {
        return previousVal + currentVal.yearsOfExperience;
    }, 0)
    console.log(yearsOfExperience);

    let average = yearsOfExperience / users.length
    console.log(average)

    let longestEmail = users.reduce ((previousValue, currentValue) => {
        if(previousValue.email.length > currentValue.email.length) {
            return previousValue.email;
        } else {
            return currentValue;
        }
    });

    console.log(longestEmail);

    let names = users.reduce(function (accumulator, user) {
        accumulator.push(user.name);
        return accumulator;
    }, []);

    let namesString = users.reduce(function (accumulator, user, index, usersArray) {
        if (index === usersArray.length - 1) {
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

})();

// Write a function that removes any duplicates from an array.
//     Input: [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7]
// expected output: [2,3,5,8,1,6,7,4]
let nums = [2,3,5,8,3,1,2,6,3,2,7,8,2,4,7];
//

//
// nums.forEach(() => {
//     if (!uniqueNums.includes()) {
//         uniqueNums.push();
//     }
// });
//
// console.log(uniqueNums);
function uniq(nums) {
    return Array.from(new Set(nums));
}
console.log(uniq(nums))