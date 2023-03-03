import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Course2Component } from './course2/course2.component';
import { ListLivresComponent } from './list-livres/list-livres.component';
import { DeleteSpacePipePipe } from './delete-space-pipe.pipe';
import { EtoileComponent } from './etoile/etoile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteEtoilePipe } from './delete-etoile.pipe';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailLivreComponent } from './detail-livre/detail-livre.component';

@NgModule({
  declarations: [
    AppComponent,
    Course2Component,
    ListLivresComponent,
    DeleteSpacePipePipe,
    EtoileComponent,
    DeleteEtoilePipe,
    HomeComponent,
    NotFoundComponent,
    DetailLivreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
