import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MenueComponent } from './menue/menue.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path:"", component: HomeComponent
  },
  {
    path:"about-us", component: AboutComponent
  },
  {
    path:"menue", component: MenueComponent
  },
  {
    path:"cart", component: CartComponent
  },
  {
    path:"details/:productId", component: DetailsComponent
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
