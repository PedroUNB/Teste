import { ICreateTeste, IUpdateTeste, ITeste, ITesteList } from '@interfaces/ITeste.interface';

export interface ITesteRepository {
  createTeste(createTesteInput: ICreateTeste): Promise<ITeste>;

  getTesteList(filter): Promise<ITesteList>;
  getTesteById(testeId: string): Promise<ITeste>;

  updateTeste(testeId: string, updateTesteInput: IUpdateTeste): Promise<ITeste>;
  removeTeste(testeId: string): Promise<ITeste>;
}
