var axios = require('axios').default

axios.get('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
.then( aleatorio =>{
    console.log(aleatorio.data)
})