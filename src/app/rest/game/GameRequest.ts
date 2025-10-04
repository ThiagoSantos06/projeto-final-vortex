export type GameRequest = {
    nome: string;
    descricao: string;
    imagem: File | string;
    categoria: string;
    origemJogo: 'Jogo escolar';
    link: {
        youtube: string;
        twitch: string;
        gameLink: string;
        other: string;
    };
};