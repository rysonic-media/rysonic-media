import { MongoClient } from 'mongodb';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI!);
    const db = client.db('rysonic');
    await db.collection('contacts').insertOne({
      ...req.body,
      createdAt: new Date(),
    });
    await client.close();
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    return res.status(500).json({ message: 'Error' });
  }
}
