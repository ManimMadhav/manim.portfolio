import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements: string[];
}

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.html',
  styleUrls: ['./education.css']
})
export class EducationComponent {
  educationList: Education[] = [
    {
      degree: 'B.Tech in Computer Science and Engineering ',
      institution: 'Vellore Institute of Technology, Vellore',
      period: '2020 - 2024',
      description: 'Completed my B.Tech with a Specialization in Data Science',
      achievements: [
        'CGPA: 8.25',
        'Built a strong academic background on Core CS fundamentals like DSA, DBMS, Operating Systems, etc.',
        'Published a research paper on Deep Learning applications in JAMRIS',
        'Active member of ACM-VIT (Research Domain).'
      ]
    },
    {
      degree: 'Senior School Graduate, Science',
      institution: 'Delhi Public School East, Bangalore',
      period: '2014 - 2020',
      description: 'Built strong foundation in Mathematics and Science, which have helped me achieve proficiency in problem-solving and analytical thinking.',
      achievements: [
        'CBSE 12th Boards - 95.5%',
        "CBSE 10th Boards - 93.5%",
        'JEE Mains Qualified 2020, with 96 percentile.',
      ]
    }
  ];
}
