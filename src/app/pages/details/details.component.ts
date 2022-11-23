import { Component, ElementRef, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StudioService} from '../../studio.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})


export class DetailsComponent implements OnInit,AfterViewInit {
  
  studio:any;
  studioPath:string="";
  studioDetail:any;
  path:any;
  images:any;
  titles:any;
  descriptions:any;
  


  @ViewChild('detailImg') imageDetail!:ElementRef;
  @ViewChild('detailInfo') detailsInfo!:ElementRef;

  constructor(private param:ActivatedRoute,private studioservice:StudioService) { }

  ngOnInit(): void {



    this.path =this.param.snapshot.paramMap.get('path')

    this.studio = this.studioservice.studio_services;
    
    console.log(this.path)

    this.studioDetail = this.studio.find(( studio:any) => studio.path == this.path )

    console.log(this.studioDetail)

    this.images=this.studioDetail.images.concat(this.studioDetail.longCarousel)

    console.log(this.images)

    this.descriptions = this.studioDetail.description

    this.titles = this.studioDetail.title

    console.log(this.descriptions)


  }

  ngAfterViewInit() {
    let i = 0;
    let j = 0;
    
    this.images.forEach((img:any)=>{
      
      var detaildedImg = document.createElement('img')
      var detailsTitles = document.createElement('p')
      var detailsMateral = document.createElement('p')
      detaildedImg.setAttribute('src',`${img}`)
      detaildedImg.setAttribute('width','100%')
      detaildedImg.setAttribute('height','100%')
      detaildedImg.classList.add('img')
      console.log(detaildedImg)
      console.log(detaildedImg.outerHTML)
      console.log(detaildedImg.classList.contains('img'))
      detaildedImg.setAttribute('data-cycle-title',`${this.titles[i]}`)
      detaildedImg.setAttribute('data-cycle-desc',`${this.descriptions[j]}`)
      i++
      j++
   
  
      this.imageDetail.nativeElement.classList.add('cycle-slideshow')
      this.imageDetail.nativeElement.appendChild(detaildedImg)
      this.detailsInfo.nativeElement.appendChild(detailsTitles)
      this.detailsInfo.nativeElement.appendChild(detailsMateral)

    })
  }
  

}
