import { Component, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../assets/icons/custom';

import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [
    trigger('slideInOut', [
      state('in', style({ transform: 'translateX(0)', opacity: 1 })), // Estado visible
      state('out', style({ transform: 'translateX(100%)', opacity: 0 })), // Estado oculto
      transition('in => out', animate('0.5s ease')), // Animación de salida
      transition('out => in', animate('0.5s ease')), // Animación de entrada
    ]),
  ],
})
export class AppComponent {
  title = 'comce';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.icons();

    // if (!localStorage.getItem('language')) {
    //   localStorage.setItem('language', 'es');
    // }
  }

  ngOnInit() {
    // Escuchar el evento de scroll
    window.addEventListener('scroll', () => this.onWindowScroll());
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => this.onWindowScroll());
  }

  icons() {
    Icons.forEach((element: Object) => {
      this.matIconRegistry.addSvgIcon(
        Object.keys(element)[0],
        this.domSanitizer.bypassSecurityTrustResourceUrl(
          Object.values(element)[0]
        )
      );
    });
  }

  // Scroll buttons
  buttonState = 'out'; // Estado inicial del botón
  onWindowScroll() {
    if (window.scrollY > 200) {
      this.buttonState = 'in';
    } else {
      this.buttonState = 'out';
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
