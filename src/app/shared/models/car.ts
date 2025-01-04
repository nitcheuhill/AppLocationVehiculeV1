export interface Car {
    id: number; // Identifiant unique de la voiture
    brand: string; // Marque de la voiture
    name: string; // Nom du modèle
    year: number; // Année de fabrication
    km: number; // Kilométrage
    price: string; // Prix (formaté en string pour respecter la structure actuelle)
    image: string; // Chemin de l'image principale
    modelImage: string; // Chemin de l'image du modèle
    modelImageDetails1: string; // Chemin de la première image détaillée
    modelImageDetails2: string; // Chemin de la seconde image détaillée
    isBlindado: boolean | null; // Indique si la voiture est blindée (true/false/null si non spécifié)
    type: string | null; // Type de carburant ou propulsion (ex. "Hybride", "Electrique", "Gasoil", ou null si non spécifié)
    model3D : string;
  }
  