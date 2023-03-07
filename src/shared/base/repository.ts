import { EntityM } from './entity';

export abstract class RepositoryM<TEntity extends EntityM> {
  abstract create(data: TEntity): Promise<TEntity>;
  abstract update(id: number, data: TEntity): Promise<TEntity>;
  abstract getById(id: number): Promise<TEntity>;
  abstract getAll(): Promise<TEntity[]>;
  abstract getOne(filter: Partial<TEntity>): Promise<TEntity>;
  abstract getMany(filter: Partial<TEntity>): Promise<TEntity[]>;
  abstract softDelete(id: number): Promise<TEntity>;
  abstract restore(id: number): Promise<TEntity>;
  abstract hardDelete(id: number): Promise<TEntity>;
}
