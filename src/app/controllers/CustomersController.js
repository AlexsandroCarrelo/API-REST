let customers = [
            {id: 1, name: "Alexsandro"},
            {id: 2, name: "Maria"},
            {id: 3, name: "João"},
            {id: 4, name: "Ana"},
            {id: 5, name: "Pedro"},
            {id: 6, name: "Paula"},
            {id: 7, name: "Lucas"},
            {id: 8, name: "Mariana"},
            {id: 9, name: "Rafael"},
            {id: 10, name: "Beatriz"}
         ];

class CustomersController{


    index(req, res){
        return res.json(customers);
    }

    show(req, res){
        const id = parseInt(req.params.id);
        const customer = customers.find(item => item.id === id);
        const status = customer ? 200 : 404;

        console.debug(`GET /customers/${id}`, customer);

        return res.status(status).json(customer);
        
    }

    create(req, res){
        const { name } = req.body;
        const newCustomer = {
            id: customers.length + 1,
            name
        };
        customers.push(newCustomer);
        return res.status(201).json(newCustomer);
    }

    update(req, res){
        const { id } = req.params;
        const { name } = req.body;
        const customerIndex = customers.findIndex(c => c.id === parseInt(id));
        if(customerIndex !== -1){
            customers[customerIndex].name = name;
            return res.json(customers[customerIndex]);
            
        }
    }
    
    destroy(req, res){
        const { id } = req.params;
        const customerIndex = customers.findIndex(c => c.id === parseInt(id));
        if(customerIndex !== -1){
            customers.splice(customerIndex, 1);
            return res.status(204).send();
        }   
    }
}

export default new CustomersController();