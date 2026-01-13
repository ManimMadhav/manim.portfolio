import { Routes } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me';
import { WorkExperienceComponent } from './components/work-experience/work-experience';
import { ProjectsShowcaseComponent } from './components/projects-showcase/projects-showcase';
import { EducationComponent } from './components/education/education';
import { SkillsCertificationComponent } from './components/skills-certification/skills-certification';
import { ContactMeComponent } from './components/contact-me/contact-me';

export const routes: Routes = [
	{ path: '', redirectTo: '/about', pathMatch: 'full' },
	{ path: 'about', component: AboutMeComponent },
	{ path: 'experience', component: WorkExperienceComponent },
	{ path: 'projects', component: ProjectsShowcaseComponent },
	{ path: 'education', component: EducationComponent },
	{ path: 'skills', component: SkillsCertificationComponent },
	{ path: 'contact', component: ContactMeComponent }
];
