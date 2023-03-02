import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course2',
  templateUrl: './course2.component.html',
  styleUrls: ['./course2.component.css']
})
export class Course2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titre = "Formation angular"

  getDescription():string
  {
      return "Description de la formation"
  }

}
