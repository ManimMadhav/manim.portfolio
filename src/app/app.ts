import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar';
import { AboutMeComponent } from './components/about-me/about-me';
import { WorkExperienceComponent } from './components/work-experience/work-experience';
import { ProjectsShowcaseComponent } from './components/projects-showcase/projects-showcase';
import { EducationComponent } from './components/education/education';
import { SkillsCertificationComponent } from './components/skills-certification/skills-certification';
import { ContactMeComponent } from './components/contact-me/contact-me';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    AboutMeComponent,
    WorkExperienceComponent,
    ProjectsShowcaseComponent,
    EducationComponent,
    SkillsCertificationComponent,
    ContactMeComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'portfolio-website';
}
