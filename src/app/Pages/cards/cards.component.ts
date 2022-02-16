import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonagensService } from 'src/app/Core/personagens.service';
import { Character } from './Character';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  CharactersId: any;
  erro: any;
  Character: any;

  constructor(private router: Router, private route: ActivatedRoute, private personagensService: PersonagensService,) { }

  ngOnInit(): void {
    this.Character = [];
    this.CharactersId = this.route.snapshot.paramMap.get("id")
    console.log(this.CharactersId);
    this.personagensService.getCharacterId(this.CharactersId).subscribe(
        (res: any) => {
            console.log(res);
            this.Character = res[0];      
    }); 
    
  }

}
