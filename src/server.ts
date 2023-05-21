import mongoose from 'mongoose';
import app from './app';

const port = 5000;

// Database connection
bootstrap().catch(err => console.log(err));

async function bootstrap() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
    console.log(`Database conntection successfull`)

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  }
  catch (err) {
    console.log(`Failed to connect`, err);
  }
}

bootstrap();


