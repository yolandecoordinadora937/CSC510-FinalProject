class TodoList {
  private todos: string[] = [];

  public addTodo(todo: string): void {
    this.todos.push(todo);
  }

  public removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  public getTodos(): string[] {
    return this.todos;
  }
}
