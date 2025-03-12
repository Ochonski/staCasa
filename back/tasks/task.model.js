class Task {
    constructor(id, title, description, status = 'pendente') {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
    }
}

module.exports = Task;