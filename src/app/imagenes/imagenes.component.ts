import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ImagenDataService } from '../imagen-data.service';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {
  imagenes: Array<{ titulo: string, descripcion: string, url: string }> = [];
  imagenForm: FormGroup;
  fileInput: File | null = null;

  constructor(private fb: FormBuilder, private imagenDataService: ImagenDataService) {
    this.imagenForm = this.fb.group({
      titulo: '',
      descripcion: ''
    });
  }

  ngOnInit(): void {
    this.imagenes = this.imagenDataService.getImagenes();
  }

  onFileChange(event: any) {
    this.fileInput = event.target.files[0];
  }

  agregarImagen() {
    const nuevaImagen = this.imagenForm.value;
    if (this.fileInput) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        nuevaImagen.url = e.target.result;
        this.imagenDataService.agregarImagen(nuevaImagen);
        this.imagenForm.reset();
        this.fileInput = null;
        this.imagenes = this.imagenDataService.getImagenes();
      };
      reader.readAsDataURL(this.fileInput);
    }
  }

  limpiarDatos() {
    localStorage.removeItem('imagenes');
    this.imagenes = [];
  }
}
