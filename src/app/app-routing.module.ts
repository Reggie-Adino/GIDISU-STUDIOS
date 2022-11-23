import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { DetailsComponent } from './pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { StudioComponent } from './pages/studio/studio.component';

const routes: Routes = [{path: '', component:HomeComponent},{path:'about',component:AboutComponent},{path:':path',component: StudioComponent
},{path:':path/:details',component:DetailsComponent},{path:'**',component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes,),
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
