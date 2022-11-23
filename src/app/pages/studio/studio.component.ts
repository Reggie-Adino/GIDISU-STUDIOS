import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {StudioService} from '../../studio.service'
 
@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit,AfterViewInit {

  getStudiohttp:any;
  studio:any;
  images:any[]=[];
  longCarouselImages:any[]=[];
  carouselImages:any;
  path:any;
  studioComponent:any;
  studioPath:string="";

  @ViewChild('carouselElement') carouselImage!:ElementRef;
  @ViewChild('longCarouselElement') longCarouselElement!:ElementRef;

  constructor(private param:ActivatedRoute, private studioservice:StudioService,) {
    // this.images.forEach(img=>{
    //   var carouselImg = document.createElement('img')
    //   console.log(carouselImg)
    //      carouselImg.setAttribute('src',`${img}`)
    //      carouselImg.setAttribute('width','100%')


    //      this.carouselImage.nativeElement.appendChild(carouselImg)
        //  window.location.reload
        //  return false
  
         
    // })
   }

  

  ngOnInit(): void {
   
  
   
    
    this.path =this.param.snapshot.paramMap.get('path')

    this.studio = this.studioservice.studio_services;
    console.log(this.studio.path)
    
    
    this.studioComponent = this.studio.find(( studio:any) => studio.path == this.path )
    
    this.images =this.studioComponent.images;
    this.longCarouselImages=this.studioComponent.longCarousel;
    // for(const img in this.studio) {
    //   this.images.push(this.studio[img].images)
    //   // console.log(this.images)
      
    // }
    console.log(this.images)

    console.log(this.longCarouselImages)


  

    // for(const img in this.studio) {
    //   this.longCarouselImages.push(this.studio[img].longCarousel)
    //   console.log(this.longCarouselImages)
      
    // }
    
  //  this.getStudiohttp = this.param.snapshot.paramMap.get('id')
  //  if (this.getStudiohttp){
  //   this.studio = this.studioservice.studio_services.filter((value)=>{this.getStudiohttp 
  //   })
  // }

  }

  ngAfterViewInit() {

     console.log(this.carouselImage.nativeElement)

    // for(const carouselImg in this.images) {
    //    console.log(document.createElement('img'))
    //    console.log('image working')

    //  }
    // console.log(this.carouselImage.nativeElement)

    console.log(this.images)

    // for(let i=0; i<this.images.length; i++) {
    //    for( let j=0; j < this.images[i].length; j++ ) {
    //     console.log(this.images[i][j])
    //     var carouselImage = document.createElement('img')
    //     carouselImage.setAttribute('src',`${this.images[i][j]}`)
    //     carouselImage.setAttribute('width','1000')


    //     this.carouselImage.nativeElement.appendChild(carouselImage)

    //    }
    // }
    

    this.images.forEach(img=>{
      var carouselImg = document.createElement('img')
         carouselImg.setAttribute('src',`${img}`)
         carouselImg.setAttribute('width','100%')


         this.carouselImage.nativeElement.appendChild(carouselImg)
        //  window.location.reload
        //  return false
  
         
    })

 


  //   for(let i=0; i<this.longCarouselImages.length; i++) {
  //     for( let j=0; j < this.longCarouselImages[i].length; j++ ) {
  //      console.log(this.longCarouselImages[i][j])
  //      var carouselImage = document.createElement('img')
  //      carouselImage.setAttribute('src',`${this.longCarouselImages[i][j]}`)

  //      this.longCarouselElement.nativeElement.appendChild(carouselImage)

  //     }
  //  }
    
    
  // this.longCarouselImages.forEach(imgs=>{
  //   var carouselImage = document.createElement('img')
  //   carouselImage.setAttribute('src',`${imgs}`)
  //   carouselImage.setAttribute('width','100%')
  //   this.longCarouselElement.nativeElement.appendChild(carouselImage)

  //   window.onload = () => {
  //     console.log(window.location.hash)
  //     if(!window.location.hash){
  //       (window as Window).location = window.location + '#path'
  //     window.location.reload();
  // }}
  
  // })

  // window.onload=() => {
  //   this.setOnload()
  // }

  
  this.longCarouselImages.forEach(imgs=>{
    var carouselImage = document.createElement('img')
    carouselImage.setAttribute('src',`${imgs}`)
    carouselImage.setAttribute('width','100%')
    this.longCarouselElement.nativeElement.appendChild(carouselImage)
})

  }

//   refresh() {
//     if(!window.location.hash){
//       (window as Window).location = window.location + '#loaded'
//   window.location.reload();
// }

setOnload(){
  this.longCarouselImages.forEach(imgs=>{
    var carouselImage = document.createElement('img')
    carouselImage.setAttribute('src',`${imgs}`)
    carouselImage.setAttribute('width','100%')
    this.longCarouselElement.nativeElement.appendChild(carouselImage)
})
}

  }

   


