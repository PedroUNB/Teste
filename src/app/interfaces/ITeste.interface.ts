export interface ITeste {
  id?: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  removedAt?: Date;
}

export interface ICreateTeste {
  id?: string;
  name: string;
}

export interface IUpdateTeste {
  id?: string;
  name: string;
}

export interface ITesteList {
  data: ITeste[];
  totalCount: number;
}
