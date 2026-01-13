import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { NavbarComponent } from './components/navbar/navbar';
import { AboutMeComponent } from './components/about-me/about-me';
import { WorkExperienceComponent } from './components/work-experience/work-experience';
import { ProjectsShowcaseComponent } from './components/projects-showcase/projects-showcase';
import { EducationComponent } from './components/education/education';
import { SkillsCertificationComponent } from './components/skills-certification/skills-certification';
import { ContactMeComponent } from './components/contact-me/contact-me';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NavbarComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    ProjectsShowcaseComponent,
    EducationComponent,
    SkillsCertificationComponent,
    ContactMeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
