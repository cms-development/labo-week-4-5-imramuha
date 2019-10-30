import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './components/login/login.component';

import { CreaturesComponent } from './components/creatures/creatures.component';
import { CreatureComponent } from './components/creatures/creature/creature.component';
import { CreatureCreateComponent } from './components/creatures/creature-create/creature-create.component';
import { CreatureUpdateComponent } from './components/creatures/creature/creature-update/creature-update.component';





const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: CreaturesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'creatures',
    component: CreaturesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'creatures/:id',
    component: CreatureComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: CreatureCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'creatures/:id/update',
    component: CreatureUpdateComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
