import { MongoClient } from 'mongodb'; 
export default async function handler(req, res) { 
    if (req.method === 'POST') { 
        const client = new MongoClient(process.env.MONGODB_URI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        }); 

        try { 
        await client.connect(); 
        const database = client.db('Vertual_Police'); // Choose a name for your database 
        const collection = database.collection('UserData'); // Choose a name for your collection 
        const loginData = req.body;
         const data =await collection.insertOne(loginData);
        // const data =  await collection.find({}).toArray()
         res.status(200).send(data)       
        } catch (error) { 
        res.status(500).json({ message: 'Something went wrong!' }); 
        } finally { 
        await client.close(); 
        } 
    } else if(req.method === 'GET') {
        const client = new MongoClient(process.env.MONGODB_URI, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            }); 
    
            try { 
            await client.connect(); 
            const database = client.db('Vertual_Police'); // Choose a name for your database 
            const collection = database.collection('UserData'); // Choose a name for your collection 
            const data =  await collection.find({}).toArray()
             res.status(200).send(data)       
            } catch (error) { 
            res.status(500).json({ message: 'Something went wrong!' }); 
            } finally { 
            await client.close(); 
            }    
    }
    }
    