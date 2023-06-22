import mongoose from "mongoose"
mongoose.set('strictQuery', false);

const connect = async () => {
  try {
    if (!process.env.MONNGO_URL) {
      throw new Error('MongoDB connection string is not defined.');
    }
    await mongoose.connect(process.env.MONNGO_URL);
  } catch (error) {
    throw new Error('Connection failed');
  }
};

export default connect