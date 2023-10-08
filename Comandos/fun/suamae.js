
const Discord = require("discord.js")

const piadasMae = [
    "Sua mãe é tão gorda que pra por cinto na calça precisa de um bumerangue",
    "A tua mãe é tão gorda que quando sobe na balança o marcador diz 'Por favor, um por vez'",
    "A sua mãe é tão gorda que quando ela deitou na praia os carinhas do green peace tentou empurrar ela pro mar",
    "A sua mãe é tão feia que quando ela foi no zoológico não deixaram ela ir embora",
    "A sua mãe é tão velha que foi casada com Matusalém",
    "A sua mãe dirige caminhão sem camisa",
    "Sua mãe passa bom ar debaixo do braço",
    "Sua mãe é tão nojenta que quando deita na areia os gatos tentam enterra-la",
    "Sua mãe já beijou a Susan Boyle",
    "Sua mãe é tão gorda que sento em 4 moedas de 25 centavos e fez uma de 1 real",
    "Sua mãe é tão feia que o bicho papão olha debaixo da cama pra vê se ela não ta embaixo",
    "Sua mãe é tão feia que quando eu digito horrível no google aparece uma foto dela",
    "A casa da sua mãe é tão suja que você tem que limpar os pés quando sai dela",
    "Uma vez sua mãe foi picada por uma cobra e a cobra morreu",
    "Sua mãe é tão baixa que quando cai uma moeda no chão ela precisa de escada pra ir buscar",
    "Sua mãe capina lote",
    "Sua mãe veio do maranhão de jegue",
    "Sua mãe é tão magra que se der um tiro nela a bala parte no meio",
    "Sua mãe da que nem chuchu na serra",
    "Sua mãe é tão velha que foi garçonete da ultima ceia",
    "Sua mãe ficou em segundo lugar em um concurso de beleza ... só tinha ela",
    "Sua mãe vende bala no sinal",
    "A sua mãe é tão feia que quando ela nasceu botaram insu-film no berçário",
    "Sua mãe é tão baixa que da salto mortal em baixo da cama",
    "Sua mãe tem catupiry na virilha",
    "Sua mãe é tão feia que se for fechar a janela é presa por mostrar a bunda",
    "Sua mãe é a Regina Cazé",
    "Sua mãe coça o ouvido com osso de galinha",
    "Sua mãe tem um fiat 147",
    "Sua mãe é tão velha que sentou atrás de Jesus na terceira série",
    "Sua mãe vê um jogo de flamengo contra atlético mineiro, ta escrito FLA X CAN ela pergunta: flamengo e camarões ?",
    "Sua mãe fuma cigarro de palha",
    "Sua mãe corta cana na voadora",
    "Sua mãe deixa o feijão queimar pra correr atrás de pipa",
    "Sua mãe desse o morro descalça fazendo moonwalk",
    "Sua mãe te chama de FDP",
    "Sua mãe só tem 1 perna e anda de patinete",
    "Sua mãe já levo mordida da mula sem cabeça",
    "Depois dos terremotos do Haiti, sua mãe nunca mais brincou de amarelinha",
    "Sua mãe toca Zabumba",
    "Se sua mãe deitar de bunda pra cima e peidar apaga o Sol",
    "Sua mãe fico entalada no buraco negro",
    "Sua mãe tem medo do velho do saco",
    "Sua mãe vende aquelas casquinhas de sorvete com maria-mole e uma bixiguinha espetada na ponta",
    "Sua mãe capina mato",
    "Sua mãe bebe Dolly uva",
    "Sua mãe desfila na ala das baianas",
    "Sua mãe é tão gorda que toma água light",
    "Sua mãe toca fear of the dark no alaúde",
    "Sua mãe te deu um playstation bloqueado",
    "Sua mãe é tão gorda que da pra ver ela no google earth",
    "Sua mãe faz rabiola enquanto frita o bife",
    "Sua mãe lambe a mão na hora de bater bafo",
    "Sua mãe faz bayblade com tampa de detergente",
    "Sua mãe corta o bombrill no meio",
    "Sua mãe fuma fumo peão",
    "Sua mãe é tão feia que aprendeu a andar em 2 dias porque ninguém queria pegar ela no colo",
    "Sua mãe ainda joga Alex Kidd",
    "Sua mãe leva head shot na faca /nerd",
    "Sua mãe tem o peito tão caído que quando tira o sutian ela fala: nossa, como o chão ta gelado",
    "Sua mãe desceu as cataratas do niagara num barril",
    "Sua mãe amarra o cabelo com xuxa de meia fina"
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
