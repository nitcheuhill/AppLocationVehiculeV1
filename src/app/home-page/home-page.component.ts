import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../services/services/scroll.service';
import { Router } from '@angular/router';

interface CarModel {
  imageUrl: string;
  title: string;
  alt: string;
}
 interface VehiculeSelling extends CarModel {}

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  
  constructor(private scrollService: ScrollService,private router: Router) {}
  
  navigateToModelPage() {
    this.router.navigate(['/modele']);
  }
  scrollToModels(): void {
    // Méthode simple
    this.scrollService.scrollToElement('models-section', 80);
  }

  carModels: CarModel[] = [
    {
      imageUrl: 'images/v53_22.png',
      title: 'Combustion',
      alt: 'Voiture à combustion'
    },
    {
      imageUrl: 'images/v53_23.png',
      title: 'Hybride',
      alt: 'Voiture hybride'
    },
    {
      imageUrl: 'images/v53_25.png',
      title: 'Electrique',
      alt: 'Voiture électrique'
    }
  ];

  vehiculeSelling: VehiculeSelling[] = [
    {
      imageUrl: 'images/v53_37.png',
      title: 'Ram 1500',
      alt: 'Pickup'
    },
    {
      imageUrl: 'images/v53_40.png',
      title: 'Toyota SW4',
      alt: 'Pickup'
    },
    {
      imageUrl: 'images/v53_43.png',
      title: 'Sea-Doo Gti',
      alt: 'boat'
    }

  ]
}


