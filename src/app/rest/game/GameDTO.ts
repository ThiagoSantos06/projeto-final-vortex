export type GameDTO = {
    nome: string;
    descricao: string;
    imagem: string;
    categoria: string;
    origemJogo: string;
    link: {
        youTube: string;
        twitch: string;
        jogo: string;
        linkOutro: string;
    };
}