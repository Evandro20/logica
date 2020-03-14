var user = require('readline-sync')
var axios = require('axios').default


axios.get('https://yesno.wtf/api')
.then(aleatorio => {
    console.log(aleatorio.data.answer)
})