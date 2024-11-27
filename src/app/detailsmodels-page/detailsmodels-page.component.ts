import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/services/scroll.service';
import { Car } from '../shared/models/car';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-detailsmodels-page',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './detailsmodels-page.component.html',
  styleUrl: './detailsmodels-page.component.scss'
})
export class DetailsmodelsPageComponent {
//création de compte
isModalOpen = false;
currentStep = 1;

// Objet pour stocker les données de formulaire
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

openModal() {
  this.isModalOpen = true;
  this.currentStep = 1; // Réinitialise à la première étape
}

closeModal() {
  this.isModalOpen = false;
}

goToStep(step: number) {
  this.currentStep = step;
}

submitForm() {
  console.log('Form data:', this.formData);
  alert('Formulaire envoyé avec succès!');
  this.closeModal();
}
//fin de création

  activeSection: string = 'images';
   images: string[] = [];
  currentImage: number = 0;

  setActiveSection(section: string) {
    this.activeSection = section;
  }

  nextImage() {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    }
  }

  prevImage() {
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }
  car: any;
  constructor(private scrollService: ScrollService , private router: Router) {}
  scrollToModels(): void {
    // Méthode simple
    this.scrollService.scrollToElement('detailsModel1', 80);
  }


  navigateToModelPage() {
    this.router.navigate(['/modele']);
  }
  ngOnInit() {
    this.getCar();
  }

  getCar(): Car | null {
    const carData = this.getCarFromStorage();
  
    if (carData) {
      this.car = carData;
      console.log('Car details:', this.car);
      this.images = this.extractCarImages(carData);
      return this.car;
    } else {
      console.error('No car found in localStorage');
      return null;
    }
  }
  
  /**
   * Récupère les données de la voiture depuis le stockage local.
   * @returns Données de la voiture ou `null` si non trouvé.
   */
  private getCarFromStorage(): Car | null {
    const carJson = localStorage.getItem('car');
    return carJson ? JSON.parse(carJson) : null;
  }
  
  /**
   * Extrait les images associées à la voiture.
   * @param car Données de la voiture.
   * @returns Tableau contenant les images.
   */
  private extractCarImages(car: Car): string[] {
    return [car.modelImageDetails1, car.modelImageDetails2];
  }
  


}
