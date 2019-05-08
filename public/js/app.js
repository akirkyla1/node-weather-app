console.log('JS Called')


// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//     response.json().then((data) => {
//         if(data.error){
//             console.log(data.error)
//         }
//         else{
//             console.log(data.location)
//             console.log(data.forecast)
//         }

//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')



weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const location = search.value
    const weatherUrl = 'http://localhost:3000/weather?address='+location
    messageOne.textContent = 'Loading forecast information'
    messageTwo.textContent = ''

    fetch(weatherUrl).then((response) => {
    response.json().then((data) => {
        if(data.error){
            messageOne.textContent = data.error
        }
        else{
            
            messageOne.textContent = data.location
            messageTwo.textContent = data.forecast
            
            // console.log(data.location)
            // console.log(data.forecast)
        }

    })

})

})