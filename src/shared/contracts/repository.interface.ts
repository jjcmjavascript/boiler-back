export interface RepositoryCreate<T> {
  create(data: Partial<T>): Promise<void>;
}
