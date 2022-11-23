import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RouterModule} from '@angular/router';
import { StudioComponent } from './studio/studio.component';
import { SharedModule } from '../shared/shared.module';
import { DetailsComponent } from './details/details.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './about/about.component';




@NgModule({
  declarations: [
    HomeComponent,
    StudioComponent,
    DetailsComponent,
    PagenotfoundComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports:[]
})
export class PagesModule { }
