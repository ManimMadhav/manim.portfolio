import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

@Component({
  selector: 'app-projects-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-showcase.html',
  styleUrls: ['./projects-showcase.css']
})
export class ProjectsShowcaseComponent {
  projects: Project[] = [
    {
      title: 'Gesture Tracking Software',
      description: 'Built a robust gesture tracking system to be used in real-time scenarios.',
      technologies: ['Python', 'OpenCV', 'PyAutoGUI', 'Mediapipe'],
      features: [
        'Hand-tracking using Mediapipe',
        'Scrolling, Volume & Cursor control using hand gestures',
        'Light-weight and efficient implementation',
        'Customizable gesture mappings'
      ],
      githubLink: 'https://github.com/yourusername/ecommerce',
      liveLink: 'https://ecommerce-demo.com',
      image: 'assets/project1.jpg'
    },
    {
      title: 'NIFTY-50 Stock Predictor',
      description: 'Predicting the opening & closing values of NIFTY-50 companies using machine learning techniques',
      technologies: ['Python', 'TensorFlow', 'Keras', 'Pandas', 'Numpy'],
      features: [
        'Used ACRNNs and LSTM architectures for modeling',
        'Predicting with good short-term accuracy',
        'Visualization of stock trends'
      ],
      githubLink: 'https://github.com/yourusername/taskmanager',
      liveLink: 'https://taskmanager-demo.com',
      image: 'assets/project2.jpg'
    },
    {
      title: 'Admission Predictor Web App',
      description: "Given the various scores of a student, this project aims to predict the chances of admission of a student for Master's degree",
      technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Flask'],
      features: [
        'Predicts chances of admission based on input scores',
        'Takes into account various factors like GRE, TOEFL, CGPA, etc.',
        'Trained on real-world dataset of university admissions',
      ],
      githubLink: 'https://github.com/yourusername/weather',
      liveLink: 'https://weather-demo.com',
      image: 'assets/project3.jpg'
    },
  ];
}
