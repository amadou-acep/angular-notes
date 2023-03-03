import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-list-livres',
  templateUrl: './list-livres.component.html',
  styleUrls: ['./list-livres.component.css']
})
export class ListLivresComponent implements OnInit {
  
  titreOfficiel = "Liste des livres"
  affichage:boolean = true
  textAfficher = "Cacher"
  listCategory:string[] = ['Big data', 'database', 'front', 'back', 'Lecture']
  categoryId:string='all'
  coursTemp:any[] = []

  listeCours=[ 
         {
           id:1,
           titre2: "Test du titre",
           description: "c'est un test",
           category: "Lecture",
           prix: 25000,
           imageUrl:"../../assets/img/logo_acep.png",
           etoile:4
         },
         {
          id:2,
          titre2: "Test du titre2",
          description: "c'est un test2",
          category: "Lecture2",
          prix: 25002,
          imageUrl: "../../assets/img/callcenter.jpg",
          etoile:3
        },
        {
          id:3,
          titre2: "Test du livre 3",
          description: "c'est un test2",
          category: "Lecture2",
          prix: 3502,
          imageUrl: "../../assets/img/callcenter.jpg",
          etoile:2
        }
      ]

  // tab1 = {
  //   data1: "amadou",
  //   data2: "gaye"
  // }

  // tab2 = [
  //   {
  //     prenom: "ahmed",
  //     nom: "Gaye",
  //     age: 26
  //   },
  //   {
  //     prenom: "ahmed",
  //     nom: "Gaye",
  //     age: 26
  //   }
  // ]

  constructor() { }

  ngOnInit(): void {
    this.coursTemp = this.listeCours
  }

  onClick(){
    this.affichage = ! this.affichage
  }

  changeCategory(){
    if (this.categoryId='all') {
      this.listeCours = this.coursTemp
    }else{
      this.listeCours = this.coursTemp.filter( (p: { category: string; }) =>
        p.category == this.categoryId
      );
    }
  }

  onNotify(event:number)
  {
    alert(event)
  }

}
