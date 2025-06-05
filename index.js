const express = require("express");
const server = express();

server.use(express.json());

//list
let customers = [
    {id:1, name: "Dev linkedin", site: "https://www.linkedin.com/in/alexsandro-da-silva-carrelo-a13864216/"},
    {id:2, name: "google", site: "http://google.com"},
    {id:3, name: "UOL", site:"http://uol.com.com"} 
];
// list return
server.get("/customers",(req, res)=>{
    return res.json(customers);
})
//retornando um id especifico
server.get("/customers/:id", (req,res)=>{
    const id= parseInt(req.params.id);
    const customer= customers.find(item => item.id === id);
    const status= customer ? 200: 404
    return res.status(status).json(customer);
});

//adicionando um novo id (post)
server.post("/customers", (req, res)=>{
    const {name, site} = req.body;
    const id = Customers[custimers.length -1].id+1;

    const newcustomer = {id, name, site};3
    custimers.push(newcustomer);

    return res.status(201).json(newcustomer);
});

//atualizando um customers (put)
server.put("/customers/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const {name, site } = req.body;
    const index = customers.findIndex(item => item.id===id);
    const status = index >= 0 ? 200 : 404;

    if (index >= 0){
        customers[index] = {id: parseInt(id), name, site };
    }  

    return res.status(status).json(customers[index]);
});

server.delete("/customers/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const index = customers.findIndex(item => item.id===id);
    const status = index >= 0 ? 200 : 404;
    if(index >0){
        customers.splice(index,1);
    }
    return res.status(status).json()
});

server.listen(3000);