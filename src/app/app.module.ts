import { SinavlisteleComponent } from './components/sinavlistele/sinavlistele.component';
import { SinavekleComponent } from './components/sinavekle/sinavekle.component';
import { MatematikcevaplariComponent } from './components/matematikcevaplari/matematikcevaplari.component';
import { SinavComponent } from './components/sinav/sinav.component';
import { DetayComponent } from './components/detay/detay.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AnasayfaComponent } from './components/kayitlar/anasayfa/anasayfa.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    KayitlarComponent,
    AnasayfaComponent,
    LoginComponent,
    RegisterComponent,
    DetayComponent,
    SinavComponent,
    MatematikcevaplariComponent,
    SinavekleComponent,
    SinavlisteleComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
