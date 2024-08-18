import mongoose from "mongoose";

export class MongoConnection{

    constructor(url){
        this.url = url;
    }

    async connect() {
        try {
          await mongoose.connect(this.url);
          console.log('MongoDB connected successfully');
        } catch (error) {
          console.error('Error connecting to MongoDB:', error.message);
          process.exit(1); // Salir del proceso si no se puede conectar a la DB
        }
      }
    
      disconnect() {
        mongoose.connection.close(() => {
          console.log('MongoDB connection closed');
        });
      }

}

