import { Routes } from '@angular/router';
import { ProjetofinalComponent } from './projetofinal/projetofinal.component';
import { CadastroComponent } from './projetofinal/cadastro/cadastro.component';
import { LoginComponent } from './projetofinal/login/login.component';
import { EscolhasRecomendacoesComponent } from './projetofinal/escolhas-recomendacoes/escolhas-recomendacoes.component';
import { AuthGuard } from './auth.guard';
import { JogoInfoComponent } from './projetofinal/jogo-info/jogo-info.component';
import { BoasVindasComponent } from './projetofinal/boas-vindas/boas-vindas.component';
import { SobreNosComponent } from './projetofinal/sobre-nos/sobre-nos.component';
import { PlanosComponent } from './projetofinal/planos/planos.component';
import { CategoriaFiltroComponent } from './projetofinal/categoria-filtro/categoria-filtro.component';
import { ContatoComponent } from './projetofinal/contato/contato.component';

export const routes: Routes = [
    {
        path: '', component: BoasVindasComponent  // 👈 tela inicial sem AuthGuard
    },

    {
        path: 'home', component: ProjetofinalComponent, canActivate: [AuthGuard]
    },

    {
        path: 'cadastro', component: CadastroComponent
    },

    {
        path: 'login', component: LoginComponent
    },

    {
        path: 'escolhas-recomendacoes', component: EscolhasRecomendacoesComponent, canActivate: [AuthGuard]
    },

    {
        path: 'sobre-nos', component: SobreNosComponent, canActivate: [AuthGuard]
    },

    {
        path: 'planos', component: PlanosComponent, canActivate: [AuthGuard]
    },

    {
        path: 'contato', component: ContatoComponent, canActivate: [AuthGuard]
    },

    {
        path: 'jogo-info/:id/:nome', component: JogoInfoComponent, canActivate: [AuthGuard]
    },

    {
        path: 'categoria/:nome', component: CategoriaFiltroComponent, canActivate: [AuthGuard]
    },

    {
        path: '**', redirectTo: ''
    }
];
