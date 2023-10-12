import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BrandComponent } from './components/brand/brand.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brands', component: BrandComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
