import { questionInt } from "readline-sync";

export const menu = () => {
  let opcao: number;

  while (true) {
    console.log("                                                  ");
    console.log("               KONDE STORE                        ");
    console.log("                                                  ");
    console.log("**************************************************");
    console.log("                                                  ");
    console.log("           1 - Cadastrar produto                  ");
    console.log("           2 - Listar produtos                    ");
    console.log("           3 - Buscar produto pelo número         ");
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
        console.log("Buscar produto pelo número");
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
