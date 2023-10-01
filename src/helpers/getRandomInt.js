 const getRandomInt = ()=>{
     return new Promise((resolve, reject)=>{
        try {
            setTimeout(()=>{
                resolve(Math.floor(Math.random()*20))
            })
        } catch (error) {
            reject(error)
        }


     })

 }

 export default getRandomInt