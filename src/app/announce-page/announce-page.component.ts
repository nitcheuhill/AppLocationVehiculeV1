import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-announce-page',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './announce-page.component.html',
  styleUrl: './announce-page.component.scss'
})
export class AnnouncePageComponent {
  onSubmit() {
    // your form submit logic here
  }
  onFileSelect(event: any): void {
    const files: FileList = event.target.files;
    const fileNameSpan = document.getElementById('fileName');
    if (fileNameSpan) {
      fileNameSpan.textContent =
        files.length > 0
          ? Array.from(files).map((file) => file.name).join(', ')
          : 'Nenhum arquivo escolhido';
    }
  }
}
