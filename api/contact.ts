export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const chunks: Buffer[] = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    const body = JSON.parse(Buffer.concat(chunks).toString());

    const client = await import('mongodb').then(m => 
      m.MongoClient.connect(process.env.MONGODB_URI!)
    );
    const db = client.db('rysonic');
    await db.collection('contacts').insertOne({
      ...body,
      createdAt: new Date(),
    });
    await client.close();
    return res.status(200).json({ message: 'Success' });
  } catch (error: any) {
    console.error('MongoDB Error:', error.message);
    return res.status(500).json({ message: error.message });
  }
}
