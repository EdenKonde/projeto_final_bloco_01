export abstract class Produto {
  private _nome: string;
  private _tipo: string;
  private _codigo: number;
  private _preco: number;
  private _quantidade: number;
  private _descricao: string;

  constructor(
    nome: string,
    tipo: string,
    codigo: number,
    preco: number,
    quantidade: number,
    descricao: string
  ) {
    this._nome = nome;
    this._tipo = tipo;
    this._codigo = codigo;
    this._preco = preco;
    this._quantidade = quantidade;
    this._descricao = descricao;
  }

  public get nome() {
    return this._nome;
  }
  public set nome(nome: string) {
    this._nome = nome;
  }
  public get tipo() {
    return this._tipo;
  }
  public set tipo(tipo: string) {
    this._tipo = tipo;
  }
  public get codigo() {
    return this._codigo;
  }
  public set codigo(codigo: number) {
    this._codigo = codigo;
  }
  public get preco() {
    return this._preco;
  }
  public set preco(preco: number) {
    this._preco = preco;
  }
  public get quantidade() {
    return this._quantidade;
  }
  public set quantidade(quantidade: number) {
    this._quantidade = quantidade;
  }
  public get descricao() {
    return this._descricao;
  }
  public set descricao(descricao: string) {
    this._descricao = descricao;
  }

  public visualizar(): void {
     console.log("\n\n*****************************************************");
     console.log("Dados do produto:");
     console.log("*****************************************************");
     console.log("Nome do produto: " + this._nome);
     console.log("Código do produto: " + this._codigo);
     console.log("Tipo: " + this._tipo);
     console.log("Preço: " + this._preco.toFixed(2));
     console.log("Quantidade disponível: " + this._quantidade);
     console.log("Descrição: " + this._descricao);
  }
}
