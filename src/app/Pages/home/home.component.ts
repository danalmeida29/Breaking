import { Component, OnInit } from '@angular/core';
import { PersonagensService } from 'src/app/Core/personagens.service';
import { NavigationExtras, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  personagens:any;
  erro: any;
  dataSource: any;
  formGroupPesquisa!: FormGroup;

  constructor(
    private service: PersonagensService,
    private router: Router,
    private formBuilder: FormBuilder
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

    /*this.formGroupPesquisa = this.formBuilder.group({
      name: [null],
    });

    const queryAdicional = new Map();
    if (this.formGroupPesquisa.value.name){
      queryAdicional.set("name", this.formGroupPesquisa.value.name);
    }*/
  }

  /*limparPesquisa(){
    this.formGroupPesquisa.reset();
  }*/

  onNavigateTo(pageName: any, CharactersId?: any) {
    console.log('Id do personagem', CharactersId);
    if (CharactersId !== null){
      const CharacterNavigationInfo: NavigationExtras = {state:{id:CharactersId}}
      this.router.navigate([`${pageName}/${CharactersId}`]);
    }
    else
    this.router.navigate([`${pageName}`]);
  }

}
