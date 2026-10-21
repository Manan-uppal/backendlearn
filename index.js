import express from 'express' ; 
const app = express() ; 
const port = 8000 ; 
app.get('/', (req, res) =>{
    res.send("Hello from Manan the god")
})

app.use(express.json());


let teaData = [];
let nextId= 1; 
app.post('/tea', (req,res)=>{
    const {name , price } = req.body ;
    const newTea = {id: nextId++ , name , price }
    teaData.push(newTea); 
    res.status(201).send(newTea) 

})

app.get('/teas', (req,res)=>{
    res.send(teaData)
})

app.get('/teas/:id', (req,res)=>{
    const tea = teaData.find(t => t.id === parseInt(req.params.id))
    if (!tea){
        return res.status(404).send('Tea not found');
    }  
    res.status(200).send(tea);
})

app.delete('/teas/:id', (req,res)=>{
    const index = teaData.findIndex(t=>t.di === parseInt(req.params.id))
    if(index===-1){
        return res.status(404).send('tea not fount')
    }
    teaData.slice(index, 1)
    res.status(200).send('Deleted')
})

app.listen(port, (req, res) =>{
    console.log(`is running on port ${port}`);
}); 
