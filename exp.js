const e = require('express')
const { response } = require('express')
let express = require('express')
let path = require('path')
let app = express()

app.get("/", function(req, resp){
    resp.sendfile(path.join(__dirname,'page1.html'))
})

app.get("/page1", function(req, resp){
    resp.sendfile(path.join(__dirname,'page2.html', function(error){
        if(error){
            console.log('Erro ao achar a pagina solicitada!')
            response.end(JSON.stringify({error:"page not found"}))
        }
    }))
})
app.get('/teste', function(req, resp){
    let vetor = [1,2,3,4,]
    response.end(JSON.stringify(vetor))
})

app.listen(8080)