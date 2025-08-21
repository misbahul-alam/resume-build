import { registerAs } from '@nestjs/config';

export default registerAs('mongodb', () => ({
  uri: process.env.MONGO_URI || 'mongodb://localhost:27017',
  dbName: process.env.MONGO_DB_NAME || 'nest_midlevel',
  user: process.env.MONGO_USER || '',
  pass: process.env.MONGO_PASS || '',
  authSource: process.env.MONGO_AUTH_SOURCE || 'admin',
}));
