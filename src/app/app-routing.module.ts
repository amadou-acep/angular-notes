import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';
import { DetailLivreGuard } from './guards/detail-livre.guard';
import { HomeComponent } from './home/home.component';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'livres', component:ListLivresComponent
  },
  {
    path:'livres/:id', component:DetailLivreComponent, canActivate:[DetailLivreGuard]
  },

  {
    path:'**', component:NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
