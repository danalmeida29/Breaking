import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/Core/personagens.service';
import { ListPersonagens } from '../cards/listPersonagens';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // personagens!: ListPersonagens[];
  personagens:any;
  erro: any;
  
  users = [
    { id: 1, name: 'João', apelido: 'Joãozinho', idade: 25},
    { id: 2, name: 'Gabriela', apelido: 'Gabi', idade: 22},
    { id: 3, name: 'Samira', apelido: 'Robin', idade: 21},
    { id: 4, name: 'Carlos', apelido: 'Carlito', idade: 23},
    { id: 5, name: 'Jhony', apelido: 'Bravo', idade: 30},
  ];

  constructor(
    private service: PersonagensService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.getList().subscribe(
      (res:any)=>{
        console.log(res);
        this.personagens = res;
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  onNavigateTo(pageName:any){
    this.router.navigate([`/${pageName}`]);
  }

}
