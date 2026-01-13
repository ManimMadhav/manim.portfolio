import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.html',
  styleUrls: ['./work-experience.css']
})
export class WorkExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Application Engineer',
      position: 'Accenture',
      period: 'October 2024 - Present',
      description: 'Developing, testing & maintaining of enterprise-grade applications and solutions.',
      responsibilities: [
        'Developed and maintained backend services using Spring Boot (Java) and MySQL for a large-scale banking application for a leading Spanish BFSI client. ',
        'Developed front-end applications using Angular, translating Figma designs into UI components and implementing API integrations. ',
        'Implemented CI/CD pipelines reducing deployment time by 40%',
        'Applied a GenAI-first approach to accelerate debugging, code reviews, improving delivery efficiency by 25%.'
      ],
      technologies: ['Java (Spring Boot)','Angular', 'TypeScript', 'Node.js', 'MySQL', 'Jenkins', 'Tibco', 'Git', 'MVC Architecture', 'RESTful APIs']
    },
    {
      company: 'Machine Learning Intern.',
      position: 'Ai Health Highway',
      period: 'Jan 2024 - June 2024',
      description: 'Worked in a dynamic and fast-paced start-up environment focusing on AI solutions for healthcare.',
      responsibilities: [
        'Contributed to the development of a Lung Sound Segmentation model for clinical diagnostic research.',
        'Hands-on experience in audio data annotation, pre-processing, and deep learning model development for healthcare applications. ',
        'Resolved mathematical challenges faced during model architecture development.',
        'Built a custom audio annotation tool for medical professionals to label lung sound data efficiently.',
        'Implemented backend services and API integrations using PHP and tested endpoints with Postman. '
      ],
      technologies: ['Python','Librosa','TensorFlow', 'Wavesurfer.js', 'Postman', 'PHP', ]
    }
    // {
    //   company: 'StartUp Ventures',
    //   position: 'Junior Developer',
    //   period: 'January 2019 - May 2020',
    //   description: 'Started career developing features for startup products.',
    //   responsibilities: [
    //     'Developed frontend components using modern JavaScript frameworks',
    //     'Assisted in backend API development',
    //     'Fixed bugs and improved application stability',
    //     'Learned best practices in software development'
    //   ],
    //   technologies: ['JavaScript', 'Vue.js', 'Python', 'MySQL']
    // }
  ];
}
