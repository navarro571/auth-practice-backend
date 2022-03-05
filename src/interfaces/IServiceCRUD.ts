interface IServiceCRUD {
    get(): object,
    find(id: Number): object,
    create(data: object): object,
    update(id: Number, data: object): object,
    delete(id: Number): object,
}

export default IServiceCRUD;