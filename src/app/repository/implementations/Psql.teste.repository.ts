import { ITesteRepository } from '../ITeste.repository';
import { TesteModel } from '@db/models/Teste.model';
import { Teste } from '../../entities/Teste';
import { IUpdateTeste, ITeste, ITesteList } from '@interfaces/ITeste.interface';
import { getSqlOptions } from '../../helpers/customSQL';

export class TesteRepository implements ITesteRepository {
  public async createTeste(createTesteInput: Teste): Promise<ITeste> {
    try {
      const newTeste = new Teste(createTesteInput);
      return await TesteModel.create({...newTeste});
    } catch (err) {
      throw new Error(err);
    }
  }

  public async getTesteById(testeId: string): Promise<ITeste> {
    try {
      return await TesteModel.findByPk(testeId);
    } catch (err) {
      throw new Error(err);
    }
  }

  public async getTesteList(filter): Promise<ITesteList> {
    const { limit, offset, order, orientation, where, raw } = getSqlOptions.testeListOptions(filter);
    try {
      const testeListFromDB = await TesteModel.findAndCountAll({
        limit,
        offset,
        order: [[order, orientation]],
        where,
        raw
      });

      return {
        data: testeListFromDB.rows,
        totalCount: testeListFromDB.count
      };
    } catch (err) {
      throw new Error(err);
    }
  }

  public async updateTeste(testeId: string, updateTesteInput: IUpdateTeste): Promise<ITeste> {
    try {
      const testeToBeUpdated = await TesteModel.findByPk(testeId);
      testeToBeUpdated.set(updateTesteInput);

      return await testeToBeUpdated.save();
    } catch (err) {
      throw new Error(err);
    }
  }

  public async removeTeste(testeId: string): Promise<ITeste> {
    try {
      const testeToBeRemoved = await TesteModel.findByPk(testeId);
      testeToBeRemoved.set('removedAt', new Date());

      return await testeToBeRemoved.save();
    } catch (err) {
      throw new Error(err);
    }
  }
}
