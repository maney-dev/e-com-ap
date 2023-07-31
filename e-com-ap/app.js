require('dotenv').config();
import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.MONGO_UR);

async function main(){
    await client.connect();
    console.log("connection OK!");
    const db = client.db('e-com-ap')
    const collection = db.collection(documents)
    const insertStuff = await collection.insertMany([{a: 1}, {b: 2}, {c: 3}])
    console.log(`document insere avec succes => ${insertStuff}`);
    return 'done !'
}

main()
.then(console.log)
.catch(console.err)
.finally(()=> client.close)
