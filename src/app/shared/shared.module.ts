// src/app/shared/shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ ],
  exports: [ ], // Exportation pour d'autres modules
  imports: [CommonModule], // Ajoutez ici d'autres modules nécessaires (par ex. FormsModule, etc.)
})
export class SharedModule {}
