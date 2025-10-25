import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GameRequest } from "./GameRequest";
import { GameDTO } from "./GameDTO";

@Injectable({
    providedIn: 'root'
})
export class GameRest {
    private readonly url: string = "api/game";
    private http: HttpClient = inject(HttpClient)

    saveGame(game: GameRequest) {
        return this.http.post(this.url, game);
    }

    getAllGames() {
        return this.http.get<GameDTO[]>(this.url);
    }

    getGameById(id: number) {
        return this.http.get<GameDTO>(`${this.url}/${id}`);
    }

    getGamesByCategory(categoria: string) {
        return this.http.get<GameDTO[]>(`${this.url}/categoria/${categoria}`);
    }

    deleteGame(id: number) {
        return this.http.delete(`${this.url}/${id}`);
    }
}