import { CommonModule } from '@angular/common';
import {
  Component,
  AfterViewInit,
  OnDestroy,
  OnInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-five-nights-1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './five-nights-1.component.html',
  styleUrls: ['./five-nights-1.component.css'],
})
export class FiveNights1Component implements OnInit, OnDestroy {
  // Coordenadas iniciales de la zona clicable (basadas en tu imagen)
  puerta1 = { x: 350, y: 355, width: 35, height: 35 };
  puerta1Luz = { x: 350, y: 390, width: 35, height: 35 };
  puerta2 = { x: 2096, y: 340, width: 35, height: 38 };
  puerta2Luz = { x: 2096, y: 382, width: 35, height: 37 };
  pasilloLuz = { x: 1202, y: 342, width: 95, height: 37 };
  camaras = { x: 1102, y: 660, width: 350, height: 150 };
  camarasOpened = { x: 1102, y: 660, width: 350, height: 150 };
  reloj = { x: 1642, y: 100, width: 142, height: 40 };

  timeString: string = '12:00';
  timeNumber: number = 0;

  gameStarted: boolean = false;
  cameraOpen: boolean = false;
  cameraNumber: number = 0;

  doors = {
    rightDoor: false,
    leftDoor: false,
    centralDoor: false
  }

  private oficinaElement!: HTMLElement;
  private mouseMoveHandler!: (event: MouseEvent) => void;
  private previousMouseX: number | null = null;

  ngOnInit() {
    // this.mouseMoveHandler = this.logMouseCoordinates.bind(this);
    this.mouseMoveHandler = this._onMouseMove.bind(this);
    window.addEventListener('mousemove', this.mouseMoveHandler);
  
    this._keyBoardEvent = this._keyBoardEvent.bind(this); // Bind the keyboard event handler
    window.addEventListener('keypress', this._keyBoardEvent);
  }

  startMovements() {
    this.oficinaElement = document.querySelector('.oficina') as HTMLElement;

    if (this.oficinaElement) {
      setTimeout(() => {
        const targetScroll = 500;
        this.oficinaElement.scrollLeft = targetScroll;
      }, 100); // Retraso para asegurar el renderizado completo

      this.mouseMoveHandler = this._onMouseMove.bind(this);
      window.addEventListener('mousemove', this.mouseMoveHandler);
    }
  }

  ngOnDestroy() {
    // Limpiar el evento al destruir el componente
    window.removeEventListener('mousemove', this.mouseMoveHandler);
  }

  startGame() {
    this.gameStarted = true;
    this.timeString = '12:00';
    this.timeNumber = 0;
    this.cameraNumber = 0;
    this._startTimeCounting();
    this._startMouseMovement();
  }

  finishGame() {
    console.log('La partida ha terminado');
    this.gameStarted = false;
  }

  openCamera() {
    this.cameraOpen = !this.cameraOpen;
  }

  useButtonDoor(doorId: number) {
    switch (doorId) {
      case 1:
        this.doors.leftDoor = !this.doors.leftDoor

        break;
      case 2:
        this.doors.rightDoor = !this.doors.rightDoor
        
        break;
    }
  }

  lightButtonDoor(doorId: number) {
    switch (doorId) {
      case 1:
        this.doors.leftDoor = !this.doors.leftDoor

        break;
      case 2:
        this.doors.rightDoor = !this.doors.rightDoor
        
        break;
      case 3:
        this.doors.centralDoor = !this.doors.centralDoor
        
        break;
    }
  }

  private _startTimeCounting() {
    setInterval(() => {
      this._timeIntervalToTimeString();
    }, 1000);
  }

  private _startMouseMovement() {
    setTimeout(() => {
      this.startMovements();
    }, 200);
  }

  private _timeIntervalToTimeString() {
    this.timeNumber++; // Incrementar el tiempo en segundos

    const minutes = Math.floor(this.timeNumber / 60); // Calcular minutos
    const seconds = this.timeNumber % 60; // Calcular segundos

    // Formatear el tiempo en formato HH:MM:SS
    this.timeString = `${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')}`;
  }

  private _logMouseCoordinates(event: MouseEvent) {
    const mouseX = event.clientX; // Coordenada X del ratón
    const mouseY = event.clientY; // Coordenada Y del ratón
    console.log(`Coordenadas del mouse: X: ${mouseX}, Y: ${mouseY}`);
  }

  private _onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX;
    const windowWidth = window.innerWidth;
    const scrollWidth = this.oficinaElement.scrollWidth;

    const leftMargin = 700;
    const rightMargin = windowWidth - 700;
    const centralMargin = 50;

    const centralLeftLimit = leftMargin + centralMargin;
    const centralRightLimit = rightMargin - centralMargin;

    if (mouseX <= leftMargin) {
      if (this.previousMouseX !== null && mouseX < this.previousMouseX) {
        const scrollPosition =
          (mouseX / windowWidth) * (scrollWidth - windowWidth);
        this.oficinaElement.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    } else if (mouseX >= rightMargin) {
      if (this.previousMouseX !== null && mouseX > this.previousMouseX) {
        const scrollPosition =
          (mouseX / windowWidth) * (scrollWidth - windowWidth);
        this.oficinaElement.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    } else if (mouseX < centralLeftLimit || mouseX > centralRightLimit) {
      if (this.previousMouseX !== null && mouseX < this.previousMouseX) {
        this.oficinaElement.scrollTo({
          left: 500,
          behavior: 'smooth',
        });
      } else if (this.previousMouseX !== null && mouseX > this.previousMouseX) {
        const scrollPosition =
          (mouseX / windowWidth) * (scrollWidth - windowWidth);
        this.oficinaElement.scrollTo({
          left: scrollPosition,
          behavior: 'smooth',
        });
      }
    }

    this.previousMouseX = mouseX;
  }

  private _keyBoardEvent(event: KeyboardEvent) {
    if (event.key == 'W' || event.key == 'w') {
      this.openCamera();
    }
  }
}
