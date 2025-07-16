import { Produto } from "./Produto";

export class ProdutoFisico extends Produto {
  private _peso: number;

  constructor(
    nome: string,
    tipo: string,
    codigo: number,
    preco: number,
    quantidade: number,
    descricao: string,
    peso: number
  ) {
    super(nome, tipo, codigo, preco, quantidade, descricao);
    this._peso = peso;
  }

  public get peso() {
    return this._peso;
  }

  public set peso(peso: number) {
    this._peso = peso;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Peso: " + this._peso);
  }
}
