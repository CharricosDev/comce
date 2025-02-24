import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngAfterViewInit(): void {
    this.route.fragment.subscribe((fragment: any) => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          // Obtener la posición del elemento y agregar un margen de desplazamiento
          const topOffset = 60; // Ajusta el valor según el espacio que desees
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - topOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }
    });
  }
}
