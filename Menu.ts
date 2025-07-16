import { questionInt } from "readline-sync";
import { ProdutoFisico } from "./src/models/ProdutoFisico";
import { ProdutoDigital } from "./src/models/ProdutoDigital";

export const menu = () => {
  // Tentando as classes ProdutoFisico e ProdutoDigital
  const produtoFisico = new ProdutoFisico(
    "Fones de Ouvido",
    "Físico",
    1,
    15.5,
    60,
    "Fone de ouvido top zera",
    6
  );

  const produtoDigital = new ProdutoDigital(
    "Ebook - Trilhando caminhos",
    "digital",
    2,
    60.99,
    6,
    "Trinhando caminhos e construíndo memórias",
    55
  );

  const produtos = [produtoFisico, produtoDigital];

  produtos.forEach((produto) => {
    console.log(produto.visualizar());
  });

  // Fim teste

  let opcao: number;

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
        console.log("Cadastrar produto");
        break;
      case 2:
        console.log("Listar produtos");
        break;
      case 3:
        console.log("Buscar produto pelo código");
        break;
      case 4:
        console.log("Atualizar produto");
        break;
      case 5:
        console.log("Apagar produto");
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
