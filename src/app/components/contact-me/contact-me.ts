import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrls: ['./contact-me.css']
})
export class ContactMeComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage = '';

  contactInfo = {
    email: 'manim.madhav@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'Bangalore, India',
    linkedin: 'https://www.linkedin.com/in/manim-madhav/',
    github: 'https://github.com/ManimMadhav',
    twitter: 'https://twitter.com/johndoe'
  };

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    console.log('Form submitted:', this.contactForm.value);
    
    this.successMessage = 'Thank you for your message! I will get back to you soon.';
    this.contactForm.reset();
    this.submitted = false;

    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}
