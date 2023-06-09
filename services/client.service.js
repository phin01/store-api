import ClientRepository from "../repositories/client.repository.js";

async function createClient(client) {
    return await ClientRepository.insertClient(client);
}

async function getClients() {
    return await ClientRepository.getClients();
}

async function getClient(id) {
    return await ClientRepository.getClient(id);
}

async function deleteClient(id) {
    await ClientRepository.deleteClient(id);
}

export default { createClient, getClients, getClient, deleteClient }