// login-form-page.component.ts
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../services/services/api.service';


@Component({
  selector: 'app-login-form-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form-page.component.html',
  styleUrls: ['./login-form-page.component.scss']
})
export class LoginFormPageComponent implements OnInit {
  @Input() isModalOpen = false;
  @Output() close = new EventEmitter<void>();

  currentView: 'login' | 'reset' | 'register' = 'login';
  currentStep = 1;

  // Données de connexion
  loginData = {
    username: '',
    password: ''
  };

  // Email de réinitialisation
  resetEmail = '';

  // Données du formulaire d'inscription
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    idCard: '',
    driverLicense: '',
    city: '',
    street: '',
    username: '',
    password: ''
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  closeModal(): void {
    this.isModalOpen = false;
    this.close.emit();
    this.resetForm();
  }

  switchView(view: 'login' | 'reset' | 'register'): void {
    this.currentView = view;
    if (view === 'register') {
      this.currentStep = 1;
    }
  }

  goToStep(step: number): void {
    this.currentStep = step;
  }

   onLogin(): void {
    console.log('Login attempt with:', this.loginData);
    this.apiService.login(this.loginData.username, this.loginData.password).subscribe({
      next: (response) => {
        alert('Connexion réussie!');
      },
      error: (error) => {
        alert('Erreur de connexion!');
        console.error(error);
      },
      complete: () => {
        console.log('Connexion terminée');
      }
    });
    
  }

  onResetPassword(): void {
    console.log('Password reset requested for:', this.resetEmail);
    this.apiService.resetPassword(this.resetEmail).subscribe({
      next: (response) => {
        alert('Email de réinitialisation envoyé');
        this.switchView('login');
        this.resetEmail = '';
      },
      error: (error) => {
        alert('Erreur lors de la réinitialisation du mot de passe');
        console.error(error);
      }
    });
  }
  
  
  submitForm(): void {
    console.log('Form data:', this.formData);
    this.apiService.registerUser(this.formData).subscribe({
      next: (response) => {
        alert('Compte créé avec succès!');
        this.closeModal();
      },
      error: (error) => {
        alert('Erreur lors de la création du compte');
        console.error(error);
      }
    });
  }
  

  
  private resetForm(): void {
    this.currentView = 'login';
    this.currentStep = 1;
    this.loginData = {
      username: '',
      password: ''
    };
    this.resetEmail = '';
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      idCard: '',
      driverLicense: '',
      city: '',
      street: '',
      username: '',
      password: ''
    };
  }
}