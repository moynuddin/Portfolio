import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MainComponent } from './components/main/main.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ServicesComponent } from './components/services/services.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
const routes: Routes = [
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent },
  { path: '', component: MainComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'footer', component: FooterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
