import mongoose, {Document, Schema} from 'mongoose';

interface IUser extends Document {
  username: string;
  email: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  username: {type: String, required: true, unique: true},
  email: {type: String, required: true, unique: true},
  createdAt: {type: Date, default: Date.now},
});

export default mongoose.model<IUser>('User', UserSchema);
