import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/Core/personagens.service';
import { ListPersonagens } from '../cards/listPersonagens';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // personagens!: ListPersonagens[];
  personagens:any;
  erro: any;
  dataSource: any;

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

  onNavigateTo(pageName: any, CharactersId?: any) {
    if (CharactersId !== null){
      const CharacterNavigationInfo: NavigationExtras = {state:{id:CharactersId}}
      this.router.navigate([`/${pageName}`, CharacterNavigationInfo.state]);
    }
    else
      this.router.navigate([`/${pageName}`]);
  }

  
 /* applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }*/

}
