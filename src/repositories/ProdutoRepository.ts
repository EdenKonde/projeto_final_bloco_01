import { Produto } from "../models/Produto";

export interface ProdutoRepository {
  cadastrar(produto: Produto): void;
  atualizar(produto: Produto): void;
  procurarPorCodigo(codigo: number): void;
  listarTodos(): void;
  deletar(codigo: number): void;
}
