import { getConnection, EntityManager, FindOneOptions, FindManyOptions, Repository } from 'typeorm';

export class Model {
  public static _id: number;

  public static fillable: string[];

  public static get db(): EntityManager {
    return getConnection().manager;
  }

  public static get repository() {
    return getConnection().getRepository(this);
  }

  public static typedRepository<T extends Model>() {
    return getConnection().getRepository<T>(this);
  }

  public static find<T extends Model>(conditions?): Promise<T[]> {
    const repository = this.db.getRepository<T>(this);
    return repository.find(conditions);
  }

  public static findOne<T extends Model>(conditions): Promise<T> {
    const repository = this.db.getRepository<T>(this);
    return repository.findOne(conditions);
  }

  public static remove<T extends Model>(entity: T, conditions?): Promise<T> {
    const repository = this.db.getRepository<T>(this);
    return repository.remove(entity, conditions);
  }

  public static findOneById<T extends Model>(id, options?: FindOneOptions<T> | FindManyOptions<T>): Promise<T> {
    return this.db.findOne<T>(this, id, options);
  }

  public static async updateById<T extends Model>(id: number, options?: any): Promise<T> {
    const repository = this.db.getRepository<T>(this);
    const modelToUpdate = await repository.findOne(id);
    if (modelToUpdate) {
      modelToUpdate.fill(options);
      const result = await modelToUpdate.save();
      return result;
    }
  }

  public static query<T extends Model>(): Repository<T> {
    const repository = this.db.getRepository<T>(this);
    return repository;
  }

  public static async create<T extends Model>(values): Promise<T> {
    const repository = this.db.getRepository<T>(this);
    const model = repository.create();
    model.fill(values);
    const result = await model.save();
    return result;
  }

  public save() {
    return Model.db.save(this);
  }

  public update() {
    return this;
  }

  public remove() {
    return (this.constructor as typeof Model).repository.remove(this);
  }
}
