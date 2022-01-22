import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PersonagensService } from 'src/app/Core/personagens.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  CharactersId: any;
  erro: any;

  constructor(private router: Router, private route: ActivatedRoute, private personagensService: PersonagensService,) { }

  ngOnInit(): void {
    this.CharactersId = this.route.snapshot.paramMap.get("id")
    this.personagensService.getCharacterId(this.CharactersId).subscribe(
        (res: any) => {
            console.log(res);
    }); }

}
