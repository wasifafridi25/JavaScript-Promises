function getVideo(subscriptionStatus){
    return new Promise((resolve, reject) => {
        if (subscriptionStatus === "VIP"){
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE"){
            resolve("show trailer")
        }
        else{
            reject("no video")
        }
    })
}
const subRef = document.querySelector(".sub__status")
async function main(){
    // console.log(await getVideo("FREE"));
    try{
        const val = await getVideo("")
        console.log(val);
        subRef.innerHTML = val;
    }
    catch (e){
        console.log(e)
        subRef.innerHTML = e
    }
    
    
    
}

main()



