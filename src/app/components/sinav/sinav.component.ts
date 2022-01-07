import { Router } from '@angular/router';
import { Kayit } from './../../models/kayit';
import { Component, OnInit } from '@angular/core';
import { Kayit2 } from 'src/app/models/kayit2';
import { FbServisService } from 'src/app/services/fbServis.service';
@Component({
  selector: 'app-kayitlar',
  templateUrl: './sinav.component.html',
  styleUrls: ['./sinav.component.css']
})
export class SinavComponent implements OnInit {
  secKayit:Kayit= new Kayit();
  adsoyad:string;
  uid:string;
  kayitlar:Kayit[];




  secKayit2:Kayit2= new Kayit2();
  kayitlar2:Kayit2[];


  constructor(
    public fbServis:FbServisService,
    public router:Router
  ) { }

  ngOnInit(): void {
    
    var user=JSON.parse(localStorage.getItem("user"));
    this.uid = user.uid;
    this.adsoyad = user.displayName;
    this.KayitListele();
    



    var user2 = JSON.parse(localStorage.getItem("user"));
    this.uid = user2.uid;
    this.Kayit2Listele();
  }
  Kaydet(){
    var user = JSON.parse(localStorage.getItem("user"));
    this.secKayit.uid = user.uid;
    var tarih = new Date();
    this.secKayit.kayTarih= tarih.getTime().toString();
    this.secKayit.duzTarih= tarih.getTime().toString();
    this.fbServis.KayitEkle(this.secKayit).then(d=>{
      this.router.navigate(['/sinav'])
    })
  }



  Kaydet2(){
    var user2 = JSON.parse(localStorage.getItem("user"));
    this.secKayit2.uid = user2.uid;
  
    this.fbServis.Kayit2Ekle(this.secKayit2).then(d=>{
     
    })
  }

  KayitListele(){
    this.fbServis.KayitListeleByUID(this.uid).snapshotChanges().subscribe(data=>{
      this.kayitlar=[];
      data.forEach(satir=>{
        const y ={...satir.payload.toJSON(),key:satir.key};
        this.kayitlar.push( y as Kayit);
      });
    })
  }


  Kayit2Listele(){
    this.fbServis.Kayit2ListeleByUID(this.uid).snapshotChanges().subscribe(data=>{
      this.kayitlar2=[];
      data.forEach(satir=>{
        const x ={...satir.payload.toJSON(),key2:satir.key};
        this.kayitlar2.push(x as Kayit2);
      });
    })
  }

  OturumKapat(){
    this.fbServis.OturumKapat().then(d=>{
      localStorage.removeItem("user")
      this.router.navigate(['/login'])
    })
  }

}