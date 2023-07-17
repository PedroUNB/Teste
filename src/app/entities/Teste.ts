import { v4 } from 'uuid';

export class Teste {
  public readonly id: string;

  public name: string;

  constructor(props: Omit<Teste, 'id'>, id?: string) {
    Object.assign(this, props);
    if (!id) this.id = v4();
  }
}
