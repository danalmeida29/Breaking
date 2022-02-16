import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {


  constructor(

    private router: Router,

    ) { }


  ngOnInit(): void {
  }

  onNavigateTo(pageName:any){
    this.router.navigate([`${pageName}`]);
  }

}
