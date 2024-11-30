import { Component } from '@angular/core';
import { FormReseachPageComponent } from '../shared/components/form-reseach-page/form-reseach-page.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormReseachPageComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss'
})
export class ContactPageComponent {

}
