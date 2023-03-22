import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogsComponent } from './blogs/blogs.component';
import { SocialsComponent } from './socials/socials.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { GiryaBoxesComponent } from './girya-boxes/girya-boxes.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    children: [
      {
        path: 'girya-boxes',
        component: GiryaBoxesComponent,
      },
    ]
  },
  {
    path: 'socials',
    component: SocialsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
