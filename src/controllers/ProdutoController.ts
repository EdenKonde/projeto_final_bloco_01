import { Produto } from "../models/Produto";
import { ProdutoRepository } from "../repositories/ProdutoRepository";

export class ProdutoController implements ProdutoRepository {
  private listaProdutos: Array<Produto> = new Array<Produto>();

  cadastrar(produto: Produto): void {
    try {
      this.listaProdutos.push(produto);
      console.log(`Produto ${produto.nome} cadastrado com sucesso!`);
    } catch (error: any) {
      console.log(`Erro ao cadastrar o produto: ${error}`);
    }
  }

  atualizar(produto: Produto): void {
    try {
      const produtoVerificado = this.verificarProduto(produto.codigo);
      if (produtoVerificado) {
        this.listaProdutos[this.listaProdutos.indexOf(produtoVerificado)] =
          produto;
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  procurarPorCodigo(codigo: number): void {
    try {
      const produto = this.verificarProduto(codigo);
      if (produto) {
        produto.visualizar();
      } else {
        console.log("Código do produto não localizado");
      }
    } catch (error: any) {
      console.log(error);
    }
  }

  listarTodos(): void {
    if (this.listaProdutos.length) {
      this.listaProdutos.forEach((produto) => {
        produto.visualizar();
      });
    } else {
      console.log("Você ainda não realizou nenhum cadastro!");
    }
  }

  deletar(codigo: number): void {
    try {
      const produto = this.verificarProduto(codigo);
      if (produto) {
        this.listaProdutos.splice(this.listaProdutos.indexOf(produto), 1);
        console.log(`Produto ${produto.nome} deletado com sucesso!`);
      } else {
        console.log("Código do produto não localizado");
      }
    } catch (error: any) {
      console.log(`Erro ao deletar o produto: ${error}`);
    }
  }

  public verificarProduto(codigo: number): Produto | null {
    const produto = this.listaProdutos.find((item) => item.codigo == codigo);
    if (produto) {
      return produto;
    } else {
      return null;
    }
  }
}
