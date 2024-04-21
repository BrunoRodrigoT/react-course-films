import interstelar from "../assets/imgs/interstelar.jpg";
import pulpFiction from "../assets/imgs/pulp_fiction.jpg";
import logan from "../assets/imgs/logan.jpg";

const movies = [
  {
    id: "1",
    name: "Interstellar",
    year: 2014,
    description:
      "As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.",
    image: interstelar,
  },
  {
    id: "2",
    name: "Pulp Fiction - Tempo de Violência",
    year: 1995,
    description:
      "Vincent Vega (John Travolta) e Jules Winnfield (Samuel L. Jackson) são dois assassinos profissionais trabalham fazendo cobranças para Marsellus Wallace (Ving Rhames), um poderosos gângster. Vega é forçado a sair com a garota do chefe, temendo passar dos limites; enquanto isso, o pugilista Butch Coolidge (Bruce Willis) se mete em apuros por ganhar luta que deveria perder.",
    image: pulpFiction,
  },
  {
    id: "3",
    name: "Logan",
    year: 2017,
    description:
      "Em 2029, Logan (Hugh Jackman) ganha a vida como chofer de limousine para cuidar do nonagenário Charles Xavier (Patrick Stewart). Debilitado fisicamente e esgotado emocionalmente, ele é procurado por Gabriela (Elizabeth Rodriguez), uma mexicana que precisa da ajuda do ex-X-Men para defender a pequena Laura Kinney / X-23 (Dafne Keen). Ao mesmo tempo em que se recusa a voltar à ativa, Logan é perseguido pelo mercenário Donald Pierce (Boyd Holbrook), interessado na menina.",
    image: logan,
  },
];

export { movies };
