// src/app/estudiante/estudiante.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EstudianteService } from '../../services/estudiante.service';
import { Estudiante } from '../../models/estudiante.model';

@Component({
  selector: 'app-estudiante',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  estudiante: Estudiante = { nombres: '', apellidos: '', correo: '' };
  editando = false;

  constructor(private service: EstudianteService) {}

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.service.listar().subscribe(data => this.estudiantes = data);
  }

  guardar(): void {
    if (this.editando && this.estudiante.id) {
      this.service.actualizar(this.estudiante.id, this.estudiante).subscribe(() => {
        this.listar();
        this.resetear();
      });
    } else {
      this.service.crear(this.estudiante).subscribe(() => {
        this.listar();
        this.resetear();
      });
    }
  }

  editar(est: Estudiante): void {
    this.estudiante = { ...est };
    this.editando = true;
  }

  eliminar(id?: number): void {
    if (id) {
      this.service.eliminar(id).subscribe(() => this.listar());
    }
  }

  resetear(): void {
    this.estudiante = { nombres: '', apellidos: '', correo: '' };
    this.editando = false;
  }
}
