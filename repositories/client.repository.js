import { connect } from "./db.js";

async function insertClient(client) {

    const conn = await connect();
    try {
        const sql = "INSERT INTO clients (name, cpf, phone, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *";
        const values = [client.name, client.cpf, client.phone, client.email, client.address];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } 
    catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getClients() {

    const conn = await connect();
    try {
        const sql = "SELECT * FROM clients";
        const res = await conn.query(sql);
        return res.rows;
    } 
    catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function getClient(id) {

    const conn = await connect();
    try {
        const sql = "SELECT * FROM clients WHERE client_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
        return res.rows[0];
    } 
    catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

async function deleteClient(id) {

    const conn = await connect();
    try {
        const sql = "DELETE FROM clients WHERE client_id = $1";
        const values = [id];
        const res = await conn.query(sql, values);
    } 
    catch (error) {
        throw error;
    } finally {
        conn.release();
    }
}

export default {insertClient, getClients, getClient, deleteClient}