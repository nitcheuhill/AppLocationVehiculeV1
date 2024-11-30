import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { Car } from '../shared/models/car';
import { FormReseachPageComponent } from '../shared/components/form-reseach-page/form-reseach-page.component';
@Component({
  selector: 'app-model-page',
  standalone: true,
  imports: [FormsModule, CommonModule,RouterModule, FormReseachPageComponent],
  templateUrl: './model-page.component.html',
  styleUrl: './model-page.component.scss',
})
export class ModelPageComponent implements OnInit {
  cars: Car[] = [
    { id:1, brand:'TOYOTA', name: 'TOYOTA SW4 Diamond', year: 2023, km: 14000, price: '390,000.00', image: 'images/model/Rectangle 4.png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: false, type: null },
    { id:2, brand:'AUDI', name: 'AUDI RS6 Avant 4.0 TFSI', year: 2024, km: 0, price: '1,180,000.00', image: 'images/model/Rectangle 4 (1).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: false, type: 'Hybride' },
    { id:3, brand:'LAND ROVER', name: 'LAND ROVER Range Rover Sport', year: 2024, km: 571, price: '970,000.00', image: 'images/model/Rectangle 4 (2).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: true, type: null },
    { id:4, brand:'BYD',  name: 'BYD Seal', year: 2024, km: 890, price: '298,000.00', image: 'images/model/Rectangle 4 (3).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: 'Electrique' },
    { id:5, brand:'LAND ROVER',  name: 'LAND ROVER Defender 110', year: 2023, km: 4787, price: '719,000.00', image: 'images/model/Rectangle 4 (4).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: null },
    { id:6, brand:'PORSCHE',  name: 'PORSCHE 911 GT3 ', year: 2023, km: 781, price: '2,550,000.00', image: 'images/model/Rectangle 4 (5).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: null },
    { id:7, brand:'RAM',  name: 'RAM 1500 Rebel', year: 2025, km: 0, price: '489,000.00', image: 'images/model/Rectangle 4 (6).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: true, type: null },
    { id:8, brand:'FORD', name: 'FORD Mustang', year: 2025, km: 0, price: '539,000.00', image: 'images/model/Rectangle 4 (7).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: null },
    { id:9, brand:'PORSHE',  name: 'PORSHE Macan GTS V6', year: 2024, km: 2.251, price: '710,000.00', image: 'images/model/Rectangle 4 (8).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: null },
    { id:10, brand:'HONDA',  name: 'HONDA Civic Type-R', year: 2022, km: 1.587, price: '429,000.00', image: 'images/model/Rectangle 4 (9).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: 'Hybride' },
    { id:11, brand:'BMW', name: 'BMW i4 Gran Coupé', year: 2024, km: 0, price: '567,000.00', image: 'images/model/Rectangle 4 (11).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: 'Gasoil' },
    { id:12, brand:'TOYOTA', name: 'TOYOTA GR Corrola', year: 2023, km: 1.571, price: '409,000.00', image: 'images/model/Rectangle 4 (12).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: 'Gasoil'},
    { id:13, brand:'BMW',  name: 'BMW M2 Competition', year: 2024, km: 0, price: '719,000.00', image: 'images/model/Rectangle 4 (13).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: null, type: 'Gasoil' },
    { id:14, brand:'FORD', name: 'FORD Ranger Raptor', year: 2024, km: 0, price: '459,000.00', image: 'images/model/Rectangle 4 (14).png',modelImage:'images/model/Rectangle 5.png',modelImageDetails1:'images/model/Rectangle 5 (1).png',modelImageDetails2:'images/model/Rectangle 6 (1).png', isBlindado: true, type: 'Gasoil' },

  ];
  selectedModel: any = null; // Contient le modèle sélectionné

  selectModel(model: any) {
    this.selectedModel = model;
  }

  filteredCars = [...this.cars];

  filters = {
    marca: '',
    modelo: '',
    blindado: '',
    motorizacao: '',
    anoMin: null,
    anoMax: null,
    valorMin: null,
    valorMax: null,
    kmMin: null,
    kmMax: null,
  };

  marcas = ['Toyota', 'Audi', 'Land Rover'];
  modelos = ['SW4', 'RS6', 'Range Rover'];
  motorizacoes = ['Electrique', 'Hybride', 'Gasoil'];

  ngOnInit() {}
  applyFilters() {
    this.filteredCars =   this.cars.filter((car) => {
      const { marca, modelo, motorizacao, anoMin, anoMax, valorMin, valorMax, kmMin, kmMax, blindado } = this.filters;

      return (
        (!marca || car.name.includes(marca)) &&
        (!modelo || car.name.includes(modelo)) &&
        (!motorizacao || car.type === motorizacao) &&
        (!anoMin || car.year >= anoMin) &&
        (!anoMax || car.year <= anoMax) &&
        (!valorMin || parseFloat(car.price.replace(',', '').replace('R$', '').trim()) >= valorMin) &&
        (!valorMax || parseFloat(car.price.replace(',', '').replace('R$', '').trim()) <= valorMax) &&
        (!kmMin || car.km >= kmMin) &&
        (!kmMax || car.km <= kmMax) &&
        (!blindado || (blindado === 'Sim' ? car.isBlindado : !car.isBlindado))
      );
    });
  }

  constructor(
    private router : Router
  ){}

  resetFilters() {
    this.filters = {
      marca: '',
      modelo: '',
      blindado: '',
      motorizacao: '',
      anoMin: null,
      anoMax: null,
      valorMin: null,
      valorMax: null,
      kmMin: null,
      kmMax: null,
    };
    this.filteredCars = [...this.cars];
  }

  goToDetails(item : any){
    console.log(item); 
    this.router.navigateByUrl('/details');
    localStorage.setItem('car', JSON.stringify(item));
  }
  

}
