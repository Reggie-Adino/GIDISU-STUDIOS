import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import {StudioService} from '../../studio.service'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],animations: [
    trigger('fade',[

    ])
  ]
})
export class HeaderComponent implements OnInit {

  showMenu: boolean = false;
  menuicon: string = 'menu';
  hovered:string = 'hover';

  studio_services:any;

  constructor(private studio:StudioService) { }

  menu:any;

  ngOnInit(): void {
    this.menu = this.studio.studio_services;
  }
  
  displaymenu(){
     this.showMenu = !this.showMenu;
     if(this.menuicon === 'menu'){
     this.menuicon = 'close';    
   }
   else{
    this.menuicon = 'menu'
    }
  }  
}
