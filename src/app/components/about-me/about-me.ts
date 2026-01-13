import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-me.html',
  styleUrls: ['./about-me.css']
})
export class AboutMeComponent {
  name: string = 'Manim Madhav';
  title: string = 'Full Stack Developer & AI Enthusiast';
  description: string = 'I am a passionate developer with expertise in building modern web applications. I love creating elegant solutions to complex problems and continuously learning new technologies. With a strong foundation in both frontend and backend development, I strive to deliver high-quality, scalable applications. I have also worked on AI/ML use-cases earning good proficieny in Python making me a versatile developer.';
  
  highlights: string[] = [
    '2+ years of experience in full-stack application development.',
    'Expert in Python, Java, Angular and Node.js',
    'Strong focus on clean code and best practices',
    'Collaborative team player with excellent communication skills',
    'Proven track record of delivering projects on time'
  ];

  profileImage: string = 'assets/profile-placeholder.jpg';
}
