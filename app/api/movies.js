import { connectToDb } from "../lib/utils";
import { Movie } from "../lib/models/Movie";

export default async function handler(req, res) {
    await connectToDb();
  
    if (req.method === 'POST') {
      try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).json({ success: true, data: movie });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
    } else {
      res.status(405).json({ success: false, message: 'Method not allowed' });
    }
  }