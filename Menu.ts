import {
  keyInSelect,
  question,
  questionFloat,
  questionInt,
} from "readline-sync";
import { ProdutoFisico } from "./src/models/ProdutoFisico";
import { ProdutoDigital } from "./src/models/ProdutoDigital";
import { ProdutoController } from "./src/controllers/ProdutoController";

export const menu = () => {
  const produtos: ProdutoController = new ProdutoController();

  let opcao, codigo, preco, quantidade, peso, tamanhoArquivo, tipo: number;
  let nome, descricao: string;
  const tiposProdutos = ["Físico", "Digital"];

  while (true) {
    console.log("                                                  ");
    console.log("               KONDE STORE                        ");
    console.log("                                                  ");
    console.log("**************************************************");
    console.log("                                                  ");
    console.log("           1 - Cadastrar produto                  ");
    console.log("           2 - Listar produtos                    ");
    console.log("           3 - Buscar produto pelo código         ");
    console.log("           4 - Atualizar produto                  ");
    console.log("           5 - Apagar produto                     ");
    console.log("           0 - Sair                               ");
    console.log("                                                  ");
    console.log("                                                  ");
    console.log("**************************************************");
    console.log("                                                  ");

    opcao = questionInt("Entre com a opcao desejada: ");

    switch (opcao) {
      case 1:
        console.log("Cadastrar produto: ");
        nome = question("Informe o nome do produto: ");
        preco = questionFloat("Informe o preço do produto: ");
        tipo = keyInSelect(tiposProdutos, "", { cancel: false }) + 1;
        codigo = questionInt("Informe o código do produto: ");
        quantidade = questionInt("Informe a quantidade do produto: ");
        descricao = question("Informe a descrição do produto: ");

        switch (tipo) {
          case 1:
            peso = questionInt("Informe o peso do produto: ");
            produtos.cadastrar(
              new ProdutoFisico(
                nome,
                "fisico",
                codigo,
                preco,
                quantidade,
                descricao,
                peso
              )
            );
            break;

          case 2:
            tamanhoArquivo = questionInt("Informe o tamanho do arquivo: ");
            produtos.cadastrar(
              new ProdutoDigital(
                nome,
                "digital",
                codigo,
                preco,
                quantidade,
                descricao,
                tamanhoArquivo
              )
            );
            break;
        }
        break;
      case 2:
        console.log("Listar todos os produtos");
        produtos.listarTodos();
        break;
      case 3:
        console.log("Buscar produto pelo código");
        codigo = questionInt("Informe o código do produto: ");
        produtos.procurarPorCodigo(codigo);
        break;
      case 4:
        console.log("Atualizar produto");
        codigo = questionInt("Informe o código do produto: ");

        let produto = produtos.verificarProduto(codigo);
        if (produto) {
          nome = question("Atualizar o nome do produto: ");
          preco = questionFloat("Atualizar o preço do produto: ");
          tipo = produto.tipo == "fisico" ? 1 : 2;
          codigo = produto.codigo;
          quantidade = questionInt("Atualizar a quantidade do produto: ");
          descricao = question("Atualizar a descrição do produto: ");

          switch (tipo) {
            case 1:
              peso = questionInt("Atualizar o peso do produto: ");
              produtos.atualizar(
                new ProdutoFisico(
                  nome,
                  "fisico",
                  codigo,
                  preco,
                  quantidade,
                  descricao,
                  peso
                )
              );
              break;
            case 2:
              tamanhoArquivo = questionInt("Atualizar o tamanho do arquivo: ");
              produtos.atualizar(
                new ProdutoDigital(
                  nome,
                  "digital",
                  codigo,
                  preco,
                  quantidade,
                  descricao,
                  tamanhoArquivo
                )
              );
              break;
          }
        } else {
          console.log("Produto não encotrado");
        }

        break;
      case 5:
        console.log("Apagar produto");
        codigo = questionInt("Informe o código do produto: ");
        produtos.deletar(codigo);
        break;
      case 0:
        console.log("Volte sempre");
        return;
      default:
        console.log("Opção inválida");
    }
  }
};

menu();
