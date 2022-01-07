import { SinavlisteleComponent } from './components/sinavlistele/sinavlistele.component';
import { SinavekleComponent } from './components/sinavekle/sinavekle.component';
import { MatematikcevaplariComponent } from './components/matematikcevaplari/matematikcevaplari.component';
import { SinavComponent } from './components/sinav/sinav.component';

import { DetayComponent } from './components/detay/detay.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AnasayfaComponent } from './components/kayitlar/anasayfa/anasayfa.component';
import { KayitlarComponent } from './components/kayitlar/kayitlar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AngularFireAuthGuard,redirectUnauthorizedTo} from '@angular/fire/auth-guard';

const redirectLogin=()=>redirectUnauthorizedTo(['/login']);
const routes: Routes = [
  {
    path: 'kayitlar', 
  component: 
  KayitlarComponent,
  canActivate:[AngularFireAuthGuard],
  data:{
    authGuardPipe:redirectLogin
  }
}
  ,
  {path: 'anasayfa', component: AnasayfaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'detay', component: DetayComponent},
  {path: 'sinav',
   component: 
   SinavComponent,
   canActivate:[AngularFireAuthGuard],
   data:{
     authGuardPipe:redirectLogin
   }
  },
  {path: 'matematikcevaplari', component: MatematikcevaplariComponent},
  {path: 'sinavekle', component: SinavekleComponent},
  {path: 'sinavlistele', component: SinavlisteleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
