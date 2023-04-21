import ClientService from "../services/client.service.js";

async function createClient(req, res, next) {

    try {
        let client = req.body;
        if(!client.name || !client.cpf || !client.phone || !client.email || !client.address) {
            throw new Error("Name, CPF, Phone, Email e Address são obrigatórios!");
        }
        // Create ClientService
        res.send(await ClientService.createClient(client));
        logger.info(`POST /client - ${JSON.stringify(client)}`)
        
    } catch (err) {
        next(err);
    }
}


async function getClients(req, res, next) {

    try {
        res.send(await ClientService.getClients());
        logger.info(`GET /client`);
        
    } catch (err) {
        next(err);
    }
}

async function getClient(req, res, next) {

    try {
        let client_id = req.params.id;
        let returnedClient = await ClientService.getClient(client_id);
        if(!returnedClient) {
            res.status(200).send(`client ${client_id} not found`);
            logger.info(`GET /client/${client_id} not found`);
        }
        else {
            res.send(returnedClient);
            logger.info(`GET /client/${client_id}`);
        }
    } catch (err) {
        next(err);
    }
}

export default { createClient, getClients, getClient }