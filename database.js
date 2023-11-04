const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb+srv://mohammad:PpA4pVPbRCp0tNsi@cluster0.iz6udmz.mongodb.net/taskM5Relations');
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
