import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import User from './models/User';

const app = express();
const PORT: number = parseInt(process.env.PORT || '3000');

mongoose.connect('mongodb://localhost/mindmap', {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json());

app.post('/users', async (req: Request, res: Response) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({message: 'Error creating user', error});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});