import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-five-nights-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './five-nights-1.component.html',
  styleUrls: ['./five-nights-1.component.css']
})
export class FiveNights1Component implements OnDestroy {

  gameStarted: boolean = false;

  private oficinaElement!: HTMLElement;
  private mouseMoveHandler!: (event: MouseEvent) => void;

  startMovements() {
    this.oficinaElement = document.querySelector('.oficina') as HTMLElement;
    console.log(this.oficinaElement);
    

    if (this.oficinaElement) {
      // Asegurarse de que el scroll se establezca después de la carga completa
      setTimeout(() => {
        const targetScroll = 500;
        this.oficinaElement.scrollLeft = targetScroll;
      }, 100); // Retraso para asegurar el renderizado completo

      // Agregar el evento de movimiento del ratón
      this.mouseMoveHandler = this.onMouseMove.bind(this);
      window.addEventListener('mousemove', this.mouseMoveHandler);
    }
  }
  
  ngOnDestroy() {
    // Limpiar el evento al destruir el componente
    window.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  private previousMouseX: number | null = null; // Almacena la posición anterior del ratón
  
  private onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX; // Posición X del ratón
    const windowWidth = window.innerWidth; // Ancho de la ventana
    const scrollWidth = this.oficinaElement.scrollWidth; // Ancho del contenido scrollable
    
    // Define los márgenes
    const leftMargin = 250; // Margen izquierdo
    const rightMargin = windowWidth - 250; // Margen derecho
    const centralMargin = 50; // Margen central (ajusta este valor según sea necesario)
    
    // Calcula los límites del margen central
    const centralLeftLimit = leftMargin + centralMargin;
    const centralRightLimit = rightMargin - centralMargin;
  
    // Verifica si el ratón está fuera del margen central
    if (mouseX <= leftMargin) {
      // Ratón en el margen izquierdo
      if (this.previousMouseX !== null && mouseX < this.previousMouseX) {
        // Solo desplazar a la izquierda
        const scrollPosition = (mouseX / windowWidth) * (scrollWidth - windowWidth); // Cálculo de la posición de scroll
        this.oficinaElement.scrollTo({
          left: scrollPosition,
          behavior: 'smooth' // Comportamiento suave
        });
      }
    } else if (mouseX >= rightMargin) {
      // Ratón en el margen derecho
      if (this.previousMouseX !== null && mouseX > this.previousMouseX) {
        // Solo desplazar a la derecha
        const scrollPosition = (mouseX / windowWidth) * (scrollWidth - windowWidth); // Cálculo de la posición de scroll
        this.oficinaElement.scrollTo({
          left: scrollPosition,
          behavior: 'smooth' // Comportamiento suave
        });
      }
    } else if (mouseX < centralLeftLimit || mouseX > centralRightLimit) {
      // Si el ratón está fuera del margen central
      if (this.previousMouseX !== null && mouseX < this.previousMouseX) {
        // Solo desplazar a la izquierda si está fuera del margen central
        this.oficinaElement.scrollTo({
          left: 500,
          behavior: 'smooth' // Comportamiento suave
        });
      } else if (this.previousMouseX !== null && mouseX > this.previousMouseX) {
        // Solo desplazar a la derecha si está fuera del margen central
        const scrollPosition = (mouseX / windowWidth) * (scrollWidth - windowWidth); // Cálculo de la posición de scroll
        this.oficinaElement.scrollTo({
          left: scrollPosition,
          behavior: 'smooth' // Comportamiento suave
        });
      }
    }
  
    // Actualiza la posición anterior del ratón
    this.previousMouseX = mouseX;
  }


  startGame() {
    this.gameStarted = true;
    setTimeout(() => {
      this.startMovements();
    }, 200);
  }

  finishGame() {
    this.gameStarted = false;
  }
}