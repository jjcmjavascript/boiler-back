import { FindOptionsWhere, Repository } from 'typeorm';

export class BaseService<T extends object> {
  constructor(private readonly repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOneById(id: number): Promise<T> {
    return await this.repository.findOneBy({ id } as any);
  }

  async create(entity: any): Promise<T> {
    return await this.repository.save(entity);
  }

  async update(id: number, entity: any): Promise<T> {
    await this.repository.update(id, entity);

    return this.findOneById(id);
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async findOne(where: FindOptionsWhere<T>): Promise<T> {
    const result = await this.repository.findOne(where);

    return result;
  }
}
