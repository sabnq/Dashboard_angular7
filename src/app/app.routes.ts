import { Routes, RouterModule } from '@angular/router';


import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';

const routes: Routes = [
    { path:'login', component: LoginComponent},
    { path:'register', component: RegisterComponent},
    { path:'**', component: NotpagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});
