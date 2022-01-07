import { Sonuc } from './../../models/sonuc';
import { Sinav } from './../../models/sinav';
import { Router } from '@angular/router';
import { FbServisService } from 'src/app/services/fbServis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sinavlistele',
  templateUrl: './sinavlistele.component.html',
  styleUrls: ['./sinavlistele.component.scss']
})
export class SinavlisteleComponent implements OnInit {
  adsoyad: string;
  uid: string;
  sinavlar:Sinav[];
  secSinav:Sinav=new Sinav();
  sonuc:Sonuc=new Sonuc();
  sinav:Sinav[];
  

  constructor(
    public fbservis:FbServisService,
    public router:Router
  ) { }

  ngOnInit() {
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid=user.uid;
    this.adsoyad=user.displayName;
    this.SinavListele();

  }

  SinavListele(){
    this.fbservis.SinavListeleByUID(this.uid).snapshotChanges().subscribe(data=>{
      this.sinavlar=[];
      data.forEach(satir=>{
        const z={...satir.payload.toJSON(),key3:satir.key};
        this.sinavlar.push(z as Sinav);
      });

    });

  }

  KayitDuzenle(sinav:Sinav){
    Object.assign(this.secSinav,sinav);

  }
  SinavSil(sinav:Sinav){
    this.fbservis.SinavSil(sinav.key3).then(()=>{
      this.sonuc.islem=true;
      this.sonuc.mesaj="Kayıt Silindi";

    });

  }
 

}
