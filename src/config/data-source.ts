import { DataSource } from 'typeorm';
import dbConfig from './db.config'; // Importing the dbConfig

export const AppDataSource = new DataSource(dbConfig); // Using dbConfig to create DataSource
