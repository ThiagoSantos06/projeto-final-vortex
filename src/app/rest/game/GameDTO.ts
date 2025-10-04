export type GameDTO = {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
    categoria: string;
    origemJogo: string;
    link: {
        youtube: string;
        twitch: string;
        gameLink: string;
        other: string;
    };
}