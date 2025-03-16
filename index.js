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
server.get("/curtomers/:id", (req,res)=>{
    const id= parseInt(req.params.id);
    const customer= Customers.find(item => item.id === id);
    const status= customer ? 200: 404
    return res.status(status).json(Customer);
});

//adicionando um novo id (post)
server.post("/customers", (req, res)=>{
    const {name, site} = req.body;
    const id = Customers[custimers.length -1].id+1;

    const newcustomer = {id, name, site};
    custimers.push(newcustomer);

    return res.status(201).json(newcustomer);
})



server.listen(3000);