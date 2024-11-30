import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isModalOpenSubject = new BehaviorSubject<boolean>(false);

  get isModalOpen$(){
    return this.isModalOpenSubject.asObservable();
  }

  openModal(){
    this.isModalOpenSubject.next(true);
  }

  closeModal(){
    this.isModalOpenSubject.next(false);
  }

  constructor() { }
}
