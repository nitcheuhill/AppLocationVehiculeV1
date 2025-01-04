import { Component, HostListener,ElementRef,inject } from '@angular/core';
import { RouterModule , Router,NavigationEnd} from '@angular/router';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { LoginFormPageComponent } from '../shared/components/login-form-page/login-form-page.component';
import { log } from 'console';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, LoginFormPageComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isNavOpen = false;
  private platformId = inject(PLATFORM_ID);
  constructor(private router: Router,
    private elementRef: ElementRef
  ) {
    if (isPlatformBrowser(this.platformId)){
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      });
    }
   
  }
    // Détecte le clic en dehors de la navigation
    @HostListener('document:click', ['$event.target'])
    onDocumentClick(targetElement: HTMLElement) {
      const clickedInside = this.elementRef.nativeElement.contains(targetElement);
      if (!clickedInside && this.isNavOpen) {
        this.closeNav();
      }
    }

    
  toggleNav() {
    this.isNavOpen = !this.isNavOpen;
  }

  // Ferme la navbar
  closeNav() {
    this.isNavOpen = false;
  }

  isModalOpen = false;
  openModal(): void {
    this.isModalOpen = true;
    console.log("modal is open");
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

}
