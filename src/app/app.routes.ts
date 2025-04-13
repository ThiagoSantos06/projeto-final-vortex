import { Routes } from '@angular/router';
import { ProjetofinalComponent } from './projetofinal/projetofinal.component';
import { CadastroComponent } from './projetofinal/cadastro/cadastro.component';
import { LoginComponent } from './projetofinal/login/login.component';
import { EscolhasRecomendacoesComponent } from './projetofinal/escolhas-recomendacoes/escolhas-recomendacoes.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    // {
    //     path: '', component: ProjetofinalComponent
    // },

    // {
    //     path: 'home', component: ProjetofinalComponent
    // },

    // {
    //     path: 'login', component: CadastroELoginComponent
    // }

    {
        path: '', component: ProjetofinalComponent, canActivate: [AuthGuard]
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
    }
];
