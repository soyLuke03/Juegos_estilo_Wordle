import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-puntos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './puntos.component.html',
  styleUrl: './puntos.component.css'
})
export class PuntosComponent implements OnInit {

  @Input() puntuacionTotal = 0

  ngOnInit(): void {

  }



}
