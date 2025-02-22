import { Component, HostListener } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Icons } from '../assets/icons/custom';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
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
  overTheTop = false;
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  // Detect Scrolling window for height (500px)
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.overTheTop = window.pageYOffset > 500;
  }
}
