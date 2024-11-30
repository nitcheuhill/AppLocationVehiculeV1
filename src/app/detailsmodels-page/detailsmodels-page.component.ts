import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/services/scroll.service';
import { Car } from '../shared/models/car';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { FormReseachPageComponent } from '../shared/components/form-reseach-page/form-reseach-page.component';
import { LoginFormPageComponent } from '../shared/components/login-form-page/login-form-page.component';

@Component({
  selector: 'app-detailsmodels-page',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, FormReseachPageComponent,LoginFormPageComponent],
  templateUrl: './detailsmodels-page.component.html',
  styleUrl: './detailsmodels-page.component.scss'
})
export class DetailsmodelsPageComponent implements OnInit {

  activeSection: string = 'images';
  images: string[] = [];
  currentImage: number = 0;
  car?: Car | null = null;

  constructor(
    private scrollService: ScrollService,
    private router: Router,
    private route: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    this.getCar();
  }

   isModalOpen = false;
  openModal(): void {
    this.isModalOpen = true;
    console.log('modal is open');
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

 

  setActiveSection(section: string): void {
    this.activeSection = section;
  }

  nextImage(): void {
    if (this.currentImage < this.images.length - 1) {
      this.currentImage++;
    }
  }

  prevImage(): void {
    if (this.currentImage > 0) {
      this.currentImage--;
    }
  }

  scrollToModels(): void {
    this.scrollService.scrollToElement('detailsModel1', 80);
  }

  navigateToModelPage(): void {
    this.router.navigate(['/modele']);
  }

  getCar(): void {
    const carData = this.getCarFromStorage();
    if (carData) {
      this.car = carData;
      console.log('Car details:', this.car);
      this.images = this.extractCarImages(carData);
    } else {
      console.error('No car found in localStorage');
      this.router.navigate(['/modele']);
    }
  }

  private getCarFromStorage(): Car | null {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const carJson = localStorage.getItem('car');
        if (!carJson) {
          return null;
        }
        const parsedCar = JSON.parse(carJson) as Car;
        return parsedCar;
      } catch (error) {
        console.error('Error parsing car data:', error);
        return null;
      }
    } else {
      console.warn('localStorage is not available in this environment');
      return null;
    }
  }

  private extractCarImages(car: Car): string[] {
    const images: string[] = [];
    if (car?.modelImageDetails1) {
      images.push(car.modelImageDetails1);
    }
    if (car?.modelImageDetails2) {
      images.push(car.modelImageDetails2);
    }
    return images;
  }
}
