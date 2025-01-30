import {AppDataSource} from "./db";
import Todo from "../model/Todo";
import {FindOneOptions, ObjectId} from "typeorm";

export default class TodoRepository {
    private repository = AppDataSource.getRepository(Todo);

    async createTodo(title: string, message: string): Promise<Todo> {
        const todo = this.repository.create({title, message});
        return this.repository.save(todo);
    }

    async getAllTodos() {
        return this.repository.find();
    }

    async updateTodo(todo: Todo) {
        return this.repository.save(todo);
    }

    async findById(id:string): Promise<Todo | null> {
        return this.repository.findOne(id as FindOneOptions<Todo>);
    }

    async deleteTodo(id: string) {
        return this.repository.delete(id);
    }

    async getAllTodoByStatus(status: boolean) {
        return this.repository.findBy({isCompleted: status});
    }
}