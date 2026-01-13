import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  category: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

@Component({
  selector: 'app-skills-certification',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills-certification.html',
  styleUrls: ['./skills-certification.css']
})
export class SkillsCertificationComponent {
  skillCategories = ['Frontend', 'Backend', 'AI/ML', 'Tools'];

  skills: Skill[] = [
    { name: 'Angular', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'Python', category: 'Backend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Java (Spring Boot)', category: 'Backend' },
    { name: 'RESTful APIs', category: 'Backend' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'Keras', category: 'AI/ML' },
    { name: 'Matplotlib', category: 'AI/ML' },
    { name: 'Pandas', category: 'AI/ML' },
    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'Tools' },
    { name: 'AWS', category: 'Tools' },
    { name: 'Jenkins', category: 'Tools' },
    { name: 'SonarQube', category: 'Tools' }
  ];

  certifications: Certification[] = [
    {
      name: 'Oracle Cloud Infrastructure Foundations Associate',
      issuer: 'Oracle',
      date: 'June 2023'
    },
    {
      name: 'Global Finance and Business Management Virtual Experience Program',
      issuer: 'JP Morgan Chase & Co.',
      date: 'May 2023'
    },
    {
      name: 'Machine Learning A-Z™: AI, Python & R',
      issuer: 'Udemy',
      date: 'March 2021'
    }
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills
      .filter(skill => skill.category === category)
      .sort((a, b) => a.name.localeCompare(b.name));
  }
}
