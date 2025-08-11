export type GameRequest = {
    nome: string;
    descricao: string;
    imagem: File | string;
    categoria: string;
    origemJogo: 'Jogo comercial' | 'Jogo gratuito';
    link: {
        youtube: string;
        twitch: string;
        gameLink: string;
        other: string;
    };
};