// pages/api/getAllData.js 
import { MongoClient } from 'mongodb'; 

export default async function handler(req, res) { 
if (req.method === 'GET') { 
	const client = new MongoClient(process.env.MONGODB_URI, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true, 
	}); 

	try { 
	await client.connect(); 
	const database = client.db('Vertual_Police'); // Choose a name for your database 
	const collection = database.collection('CrimeReport'); // Choose a name for your collection 
	const allData = await collection.find({}).toArray(); 

	res.status(200).send(allData); 
	} catch (error) { 
	res.status(500).json({ message: 'Something went wrong!' }); 
	} finally { 
	await client.close(); 
	} 
} else { 
	res.status(405).json({ message: 'Method not allowed!' }); 
} 
}
