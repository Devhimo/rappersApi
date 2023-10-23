const express = require('express')
const app = express()
const PORT = 8000

const rappers  = {

    '21 savage': {
        'age': 29,
        'birthName': 'Sheyaa bin Abraham-Joseph',
        'birthLocation': 'London, England',
    },

    'chance the rapper':{
        'age': 29,
        'birthName': 'Chancelor Benet',
        'birthLocation': 'London, England',
    },
    'unknown':{
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown',
    }
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
})

app.listen(PORT , () =>{
    console.log(`The server is now running on ${PORT}! Betta go catch it!`);
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name.toLowerCase()
    if (rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
    
})