import { FbServisService } from './services/fbServis.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uygc';
  constructor(
    public FbServis:FbServisService,
    public router:Router,
  ){}
  OturumKapat(){
    this.FbServis.OturumKapat().then(()=>{
      localStorage.removeItem("user");
      this.router.navigate(['/login']);
    });
  }
  
  OturumKontrol() {
    if(localStorage.getItem("user")){
      return true;
    } else{
      return false;
    }
  }

}
