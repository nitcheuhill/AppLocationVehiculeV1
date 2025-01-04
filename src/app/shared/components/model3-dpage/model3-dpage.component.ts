import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

@Component({
  selector: 'app-model3-dpage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './model3-dpage.component.html',
  styleUrls: ['./model3-dpage.component.scss'] // Correction de "styleUrl" en "styleUrls"
})
export class Model3DpageComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() is3DModalOpen = false; // Contrôle l'état de la modale
  @Input() modelPath = 'model 3D/ford_f-150_raptor.glb'; // Chemin vers le modèle 3D à charger
  @Output() close = new EventEmitter<void>(); // Événement pour fermer la modale

  @ViewChild('renderCanvas', { static: false }) renderCanvas!: ElementRef<HTMLCanvasElement>; // Référence au canvas

  private engine!: BABYLON.Engine;
  private scene!: BABYLON.Scene;
  private camera!: BABYLON.ArcRotateCamera;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.is3DModalOpen) {
      this.initializeBabylon(); // Initialiser Babylon.js au chargement de la modale
    }
  }

  ngOnChanges(): void {
    if (this.is3DModalOpen && !this.engine) {
      this.initializeBabylon(); // Réinitialiser Babylon.js si la modale est ouverte
    }
  }

  ngOnDestroy(): void {
    if (this.engine) {
      this.engine.dispose(); // Nettoyer les ressources de Babylon.js
    }
  }

  close3DModal(): void {
    this.is3DModalOpen = false;
    this.close.emit(); // Émettre l'événement de fermeture
    this.disposeBabylon(); // Nettoyer les ressources Babylon.js
  }

  private initializeBabylon(): void {
    if (this.renderCanvas) {
      // Initialiser le moteur Babylon.js avec le canvas
      this.engine = new BABYLON.Engine(this.renderCanvas.nativeElement, true, {
        antialias: true,  // Active l'antialiasing
        adaptToDeviceRatio: true,  // Utilise le ratio de l'écran pour plus de précision
      });
      
      // Créer une scène
      this.scene = new BABYLON.Scene(this.engine);
      this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0); 
      

      // Ajouter une caméra
      this.camera = new BABYLON.ArcRotateCamera(
        'camera',
        Math.PI / 2,
        Math.PI / 2.5,
        10,
        BABYLON.Vector3.Zero(),
        this.scene
      );
      // Désactivez la profondeur de champ si elle est active
      this.scene.postProcessRenderPipelineManager.dispose();
      this.engine.setHardwareScalingLevel(1.0);  // Essayez avec un niveau plus bas (ex. 0.5) pour une meilleure performance

      this.camera.attachControl(this.renderCanvas.nativeElement, true);

      // Ajouter une lumière
      const light = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(5, 5, 5), this.scene);
      

      // Charger le modèle 3D
      if (this.modelPath) {
        BABYLON.SceneLoader.Append('', this.modelPath, this.scene, (scene) => {
          console.log('Modèle chargé avec succès !');
        }, null, (scene, message) => {
          console.error('Erreur de chargement du modèle :', message);
        });
      } else {
        console.warn('Aucun chemin de modèle fourni.');
      }

      // Démarrer la boucle de rendu
      this.engine.runRenderLoop(() => {
        this.scene.render();
      });

      // Gérer le redimensionnement du canvas
      window.addEventListener('resize', () => {
        this.engine.resize();
      });
    } else {
      console.error('Canvas non trouvé.');
    }
  }

  private disposeBabylon(): void {
    // Nettoyer les ressources de la scène et du moteur
    if (this.engine) {
      this.engine.dispose();
      this.engine = null!;
      this.scene = null!;
      this.camera = null!;
    }
  }
}
