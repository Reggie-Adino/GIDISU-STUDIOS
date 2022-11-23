import { Component, ElementRef, OnInit, ViewChild,AfterViewInit, ViewChildren, QueryList} from '@angular/core';
import { StudioService } from 'src/app/studio.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {
  images:any
  selectedImage:any
  defaultImg:any;
  cards:any
  @ViewChildren('cardImg') image!:QueryList<ElementRef>;
  @ViewChild('picer') pic!:ElementRef;

  constructor(private studioservice:StudioService) { }

  ngOnInit(): void {
    this.cards = this.studioservice.studio_services;
    console.log(this.cards)
    
  }

  ngAfterViewInit() {
    // this.image = this.cards;
    // this.defaultImg = this.pic;
    
     //check
    // this.image.forEach(img => {
    //   this. defaultImg.push(img.nativeElement.src)
    // })
    
    // console.log(this.defaultImg)
    
    // console.log(this.image)
    // this.image.forEach((img:any) => {
    //   console.log(img)
    // });
    console.log(this.pic.nativeElement.src)
    
  }
  
 
  hover(imgHover:any) {
    // console.log(this.image)
  //   this.images.forEach((img:any) => {
  //     console.log(img);
  //  })
  console.log(imgHover)
  // this.defaultImg.filter((img:any) => {
  //   console.log( img==imgHover)
  // })
  this.pic.nativeElement.src = imgHover;
    // this.images.filter((img:any)=>{
    //   // console.log(img.nativeElement.src)
    //   console.log(cardImg)
    // })
    // this.images.nativeElement.src = this.image.nativeElement.currentSrc;
  }

  onMouseLeave() { 
    
    this.pic.nativeElement.src=`../../../assets/images/pexels-nitin-khajotia-1516680.jpg`;
    // console.log(this.defaultImg.nativeElement.src);
  }

}
