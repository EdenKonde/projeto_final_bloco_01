import { Produto } from "./Produto";

export class ProdutoDigital extends Produto {
  private _tamanhoArquivo: number;

  constructor(
    nome: string,
    tipo: string,
    codigo: number,
    preco: number,
    quantidade: number,
    descricao: string,
    tamanhoArquivo: number
  ) {
    super(nome, tipo, codigo, preco, quantidade, descricao);
    this._tamanhoArquivo = tamanhoArquivo;
  }

  public get tamanhoArquivo() {
    return this._tamanhoArquivo;
  }

  public set tamanhoArquivo(tamanhoArquivo: number) {
    this._tamanhoArquivo = tamanhoArquivo;
  }

  public visualizar(): void {
    super.visualizar();
    console.log("Tamanho do arquivo: " + this._tamanhoArquivo);
  }
}
