import { promises as fs } from "fs";
import pg from "pg";

async function getConnectionString() {

  let fileName = "./repositories/connectionString.json";
  let config;

  try {
    config = JSON.parse(await fs.readFile(fileName));
    return config[0].connectionString;
  }
  catch (err) {
    config = {};
    console.log("unable to read file '" + fileName + "': ", err);
    console.log("see config-sample.json for an example");
    return config;
  }
};

async function connect() {

    // Only create pool in first execution
    if (!global.connection) {
        const pool = new pg.Pool({
            connectionString: await getConnectionString()
        });
        global.connection = pool;
    }
    
    return global.connection.connect();

}

export default { connect };