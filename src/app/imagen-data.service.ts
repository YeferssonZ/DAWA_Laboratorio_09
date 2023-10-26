import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImagenDataService {
  constructor() {}

  getImagenes() {
    const imagenes = localStorage.getItem('imagenes');
    return imagenes ? JSON.parse(imagenes) : [];
  }

  agregarImagen(imagen: { titulo: string, descripcion: string, url: string }) {
    const imagenes = this.getImagenes();
    imagenes.push(imagen);
    localStorage.setItem('imagenes', JSON.stringify(imagenes));
  }
}
