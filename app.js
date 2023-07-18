// fetch("https://jsonplaceholder.typicode.com/users/1");

const emailRef = document.querySelector(".email")
console.log(emailRef);

//Now to unlock the data that we just fetched from our backend  API we can do 2 things, either
// 1. Then
// for pending promise we have to do .then() and use call back function. Now to make it compatible with the frontend, something we 
// can use we use .json()

fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    response.json().then(data => {
        console.log(data)
        emailRef.innerHTML = data.email;
    })
})

//A more cleaner way, beter practice:
//when we do return response.json() the whole fetch thing becomes response.json() meaning this whole thing is s apromise now and have to use.then
// outside without nesting .then, so looks better ad cleaner

fetch("https://jsonplaceholder.typicode.com/users/1").then(response => {
    return response.json();
}).then(data => {
    console.log(data)
    emailRef.innerHTML = data.email;
})



// 2. Async/Await (best practcie in most scenarios but they are both extrememly important)
// we need to use await before the promise to unlock it and store it in a variable.
// now await can only be used inside an async function
// finally you have to call the function 
async function main(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const data = await response.json()
    console.log(data)
    emailRef.innerHTML = data.email;
}

main()

//the unlocking in then method takes some time, so if we do console.log() outside that will run first
//as .then() takes some time and runs in the background
// whereas in async await you can see everything in order


// creating a promise
// the promise accepts resolve, reject
function subscriptionStatus(){
    return new Promise((resolve, reject) => {
        resolve("VIP");
    })
}

console.log(subscriptionStatus());

//using this promise in frontend

//the function is actually returning promise so we can await that
async function sub(){
    console.log(await subscriptionStatus())
}

sub()

//using then
//here we don't need to do response.json() as we are not talking to a backend server/API. here we are talking to frontend
subscriptionStatus().then(response => console.log(response))

//to make it wait a bit, we can use set

function statusStar(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Star")
        }, 2000)
    })
}

async function checkStatus(){
    console.log(await statusStar())
}

checkStatus()

//using then
statusStar().then(response => {console.log(response)})

const st = document.querySelector(".subStatus")

async function s(){
    const reference = await statusStar()
    st.innerHTML = reference
}

s()

