import { Component } from '@angular/core';
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
}
