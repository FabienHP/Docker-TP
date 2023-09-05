import { MongoClient } from "mongodb";

const connectionString = process.env.MONGO_URI || "";

const client = new MongoClient(connectionString);

let connection;
try {
    connection = await client.connect();
} catch(e) {
    console.error(e);
}

let db = connection.db("docker-tp");

export default db;
