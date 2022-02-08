// fetch(url, {headers: {'Authorization': ' githubkey'}})

//
"use strict";


    function getGithubUsernames(username) {
        fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': githubkey}})
            .then(response => response.json())
            .then(responseObj => console.log(responseObj[0].created_at))
    }

    getGithubUsernames('jhconger')


const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

wait(1000).then(() => console.log('runs after 1 seconds'))
wait(2000).then(() => console.log('runs after 2 seconds'))
wait(3000).then(() => console.log('runs after 3 seconds'))
wait(4000).then(() => console.log('runs after 4 seconds'))
wait(5500).then(() => console.log('runs after 5 seconds and 500 milliseconds'))