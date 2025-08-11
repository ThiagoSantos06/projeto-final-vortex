export type GameRequest = {
    nome: string;
    descricao: string;
    imagem: File | string;
    categoria: string;
    origemJogo: 'Jogo comercial' | 'Jogo gratuito';
    link: {
        youTube: string;
        twitch: string;
        jogo: string;
        linkOutro: string;
    };
};