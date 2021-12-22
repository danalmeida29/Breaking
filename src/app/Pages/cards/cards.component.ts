import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  users = [
    { id: 1, name: 'João', apelido: 'Joãozinho', idade: 25},
    { id: 2, name: 'Gabriela', apelido: 'Gabi', idade: 22},
    { id: 3, name: 'Samira', apelido: 'Robin', idade: 21},
    { id: 4, name: 'Carlos', apelido: 'Carlito', idade: 23},
    { id: 5, name: 'Jhony', apelido: 'Bravo', idade: 30},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
