import calcaFeminina from "../assets/products/Calça Gens Feminino.png";
import camisaMarrom from "../assets/products/Camisa Marron.png";
import camisaPreta from "../assets/products/Camisa Preta Mulher.png";
import casacoPreto from "../assets/products/Homem Casaco Preto1.png";


const products = [
  {
    id: 1,
    name: "Calça Jeans Feminina",
    category: "Feminino",
    price: 129.90,
    image: calcaFeminina,
    description:
      "Calça jeans feminina confortável, com corte moderno e ideal para diferentes ocasiões.",
    sizes: [
      "36",
      "38",
      "40",
      "42",
    ],
    colors: [
      "Azul Jeans",
    ],
  },


  {
    id: 2,
    name: "Camisa Marrom Feminina",
    category: "Feminino",
    price: 89.90,
    image: camisaMarrom,
    description:
      "Camisa marrom feminina elegante e versátil para compor diversos estilos.",
    sizes: [
      "P",
      "M",
      "G",
    ],
    colors: [
      "Marrom",
    ],
  },


  {
    id: 3,
    name: "Camisa Preta Feminina",
    category: "Feminino",
    price: 99.90,
    image: camisaPreta,
    description:
      "Camisa preta feminina com estilo clássico e confortável para o dia a dia.",
    sizes: [
      "P",
      "M",
      "G",
    ],
    colors: [
      "Preto",
    ],
  },


  {
    id: 4,
    name: "Casaco Preto Masculino",
    category: "Masculino",
    price: 199.90,
    image: casacoPreto,
    description:
      "Casaco preto masculino moderno, confortável e perfeito para dias frios.",
    sizes: [
      "M",
      "G",
      "GG",
    ],
    colors: [
      "Preto",
    ],
  },
];


export default products;