
const Discord = require("discord.js")

const piadasMae = [
    "Sua mãe é tão gorda que pra por cinto na calça precisa de um bumerangue",
    "A tua mãe é tão gorda que quando sobe na balança o marcador diz 'Por favor, um por vez'",
    "A sua mãe é tão gorda que quando ela deitou na praia os carinhas do green peace tentou empurrar ela pro mar",
    "A sua mãe é tão feia que quando ela foi no zoológico não deixaram ela ir embora",
    "Sua mãe é tão nojenta que quando deita na areia os gatos tentam enterra-la",
    "Sua mãe é tão gorda que sento em 4 moedas de 25 centavos e fez uma de 1 real",
    "Sua mãe é tão feia que o bicho papão olha debaixo da cama pra vê se ela não ta embaixo",
    "Sua mãe é tão feia que quando eu digito horrível no google aparece uma foto dela",
    "A casa da sua mãe é tão suja que você tem que limpar os pés quando sai dela",
    "Sua mãe é tão baixa que quando cai uma moeda no chão ela precisa de escada pra ir buscar",
    
    "Sua mãe veio do maranhão de jegue",
    "Sua mãe é tão magra que se der um tiro nela a bala parte no meio",
    "Sua mãe é tão velha que foi garçonete da ultima ceia",
    "Sua mãe ficou em segundo lugar em um concurso de beleza ... só tinha ela",
    "Sua mãe vende bala no sinal",
    "A sua mãe é tão feia que quando ela nasceu botaram insul-film no berçário",
    "Sua mãe é tão baixa que da salto mortal em baixo da cama",
    "Sua mãe é tão feia que mostrou a cara na sacada e foi presa por mostrar a bunda",
    "Sua mãe é tão velha que sentou atrás de Jesus na terceira série",
    "Sua mãe desse o morro descalça fazendo moonwalk",
    "Sua mãe só tem 1 perna e anda de patinete",
    "Sua mãe já levo mordida da mula sem cabeça",
    "Depois dos terremotos do Haiti, sua mãe nunca mais brincou de amarelinha",
    "Se sua mãe deitar de bunda pra cima e peidar apaga o Sol",
    "Sua mãe fico entalada no buraco negro",
    "Sua mãe é tão gorda que da pra ver ela no google earth",
    "Sua mãe é tão feia que aprendeu a andar em 2 dias porque ninguém queria pegar ela no colo",
    "Sua mãe tem o peito tão caído que quando tira o sutia ela fala: nossa, como o chão ta gelado"
  ];

  

  module.exports = {
    name: 'suamae', 
    description: 'piada de sua maekkkkkkk',
    type: Discord.ApplicationCommandType.ChatInput,
  
    run: async (client, interaction) => {
  
        const randomIndex = Math.floor(Math.random() * piadasMae.length);
        const piada = piadasMae[randomIndex];
  
      interaction.reply(piada)
      
    }
  }
