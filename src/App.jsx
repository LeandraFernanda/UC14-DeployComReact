//import React from 'react';
import CardJogador from './components/CardJogador';
import Fallen from './assets/fallen.jpg';
import Alan_Patrick from './assets/alan_patrick.png';
import HugoMallo from './assets/Hugo-Mallo.jpg';
import Tinga from './assets/Tinga.jpg';
import Fernandao from './assets/fernandao.jpg';
import Titulo from './components/Titulo';


//Função principal do App
export default function App(){
  //Array de objetos com informações dos jogos
  //cada objeto tem um id e as props nome , posicao, time, avaliacao e imagem
  const jogadores = [
    {id:1, 
      nome: "Fallen",
      posicao: "IGL", 
       time:"Furia", 
       avaliacao: 10, 
       imagem: Fallen
      },
    {id:2, 
      nome:"Fernandão",
       posicao:"Atacante/Capitão",
        time: "Internacional",
         avaliacao: 10,
          imagem: Fernandao},
    {id:3,
       nome:"Alan_Patrick",
        posicao:"Meia",
        time: "Internacional",
          avaliacao: 9.5,
           imagem: Alan_Patrick},
    {id:4,
       nome:"Hugo-Mallo",
       posicao:"Lateral Direito/Capitão",
       time: "Celta de Vigo",
       avaliacao: 9.0,
       imagem: HugoMallo},
    {id:5,
       nome:"Tinga",
       posicao:"Volante",
       time: "Internacional",
       avaliacao: 9.0,
       imagem: Tinga}
  ]


  return(
   <main
    style={{display: "flex",
       gap: "20px", 
       justifyContent: "center",
        marginTop: "50px",flexWrap: "wrap"  /*permite a quebra de linhas se a tela for pequena*/
    }}>
    {/**Componente de Título */}
    <div style={{width: "100%"}}>
      <Titulo texto= "Lista Jogadores" />
    </div>
    {/** Percorrer a array de jogadores com o .map |  Para cada jogador cria um CardJogador*/}
    {jogadores.map((j) => (
      //Key é necessário para o React identificar cada componente de forma única
      //{...j} espalhar todas as props (nome, posicao, time, avaliacao, imagem)
      <CardJogador key={j.id}{...j} />
    ))
  }
   </main>
  );
}
