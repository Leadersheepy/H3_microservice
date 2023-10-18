import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Add this line
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LivreComponent } from './livre/livre.component';
import { MesLivresComponent } from './mes-livres/mes-livres.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LivreService } from './services/livre.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivreComponent,
    MesLivresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
