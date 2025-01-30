import 'reflect-metadata'
import 'reflect-metadata';
import { DataSource } from "typeorm";
import Todo from "../model/Todo";
import dotenv from 'dotenv';

// Загружаем переменные окружения
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mongodb",
    url: process.env.DATABASE_URL, // Используем переменную окружения
    entities: [Todo],
    synchronize: true,
    useUnifiedTopology: true,
});

export async function initDB() {
    try {
        await AppDataSource.initialize();
        console.log('Done!');
    } catch (e) {
        console.error("Error: " + e);
    }
};
