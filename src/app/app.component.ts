import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EstudianteComponent } from '../app/components/estudiante/estudiante.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EstudianteComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'estudiante';
}
