import { TesteRepository } from '../repository/implementations/Psql.teste.repository';
import { existsOrError, notExistsOrError } from '../helpers/validators';

export class TesteService {
  private _testeRepository: TesteRepository;

  constructor() {
    this._testeRepository = new TesteRepository();
  }

  public async createTeste(createTesteInput) {
    return await this._testeRepository.createTeste(createTesteInput);
  }

  public async getTesteById(testeId) {
    try {
      const testeFromDb = await this._testeRepository.getTesteById(testeId);
      existsOrError(testeFromDb, 'Teste não existe!');

      return testeFromDb;
    } catch (err) {
      throw new Error(err);
    }
  }

  public async getTesteList(filter) {
    return await this._testeRepository.getTesteList(filter);
  }

  public async updateTeste(testeId, updateTesteInput) {
    try {
      const testeToBeRemoved = await this._testeRepository.getTesteById(testeId);
      existsOrError(testeToBeRemoved, 'Teste não existe!');

      return await this._testeRepository.updateTeste(testeId, updateTesteInput);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async removeTeste(testeId) {
    try {
      const testeToBeRemoved = await this._testeRepository.getTesteById(testeId);
      existsOrError(testeToBeRemoved, 'Teste não existe!');
      notExistsOrError(testeToBeRemoved.removedAt, 'Teste já foi removido!');

      return await this._testeRepository.removeTeste(testeId);
    } catch (err) {
      throw new Error(err);
    }
  }
}
