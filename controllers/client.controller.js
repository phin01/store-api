async function createClient(req, res, next) {

    try {
        let client = req.body;
        if(!client.name || !client.cpf || !client.phone || !client.email || client.address) {
            throw new Error("Name, CPF, Phone, Email e Address são obrigatórios!");
        }
        // Create ClientService
        res.send({});
        console.log("Client criado");
        logger.info(`POST /client - ${JSON.stringify(client)}`)
        
    } catch (err) {
        next(err);
    }
}

export default { createClient }