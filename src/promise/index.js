const someTimeWillHappen = ()=>{
    return new Promise((resolve, reject)=>{
        if (true) {
            resolve('Hey');
        }else{
            reject('Whooops');
        }
    } )
}

someTimeWillHappen()
    .then( response => console.log(response))
    .catch(err => console.log(err))


const someTimeWillHappen2 = () => {
    return new Promise((resolve, reject)=>{
        if (true) {
            setTimeout(()=>{
                resolve('True')
            }, 2000)
        }else{
            const error = new Error('Whoops');
            reject(error)
        }
    })
}

someTimeWillHappen2()
    .then( response => console.log(response))
    .then(()=> console.log('Hola'))
    .catch( err => console.log(err))

Promise.all([someTimeWillHappen(), someTimeWillHappen2()])
    .then(response=>{
        console.log('Array of results', response)
    })
    .catch(err=>{
        console.error(err)
    })