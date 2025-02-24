import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
// import { ModalRedirectHomesComponent } from 'src/app/homes/modal-redirect-homes/modal-redirect-homes.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  languageControl = new FormControl('es');
  selectedLanguage: any;

  constructor(private router: Router, private matDialog: MatDialog) {}
  ngOnInit(): void {}

  // Añade la clase "active" al botón del menú que coincide con la ruta actual
  // updateActiveClass(): void {
  //   const links = document.querySelectorAll('.btn-menu-home');
  //   links.forEach((link) => {
  //     const href = link.getAttribute('routerLink');
  //     if (href === this.router.url) {
  //       link.classList.add('selected');
  //     } else {
  //       link.classList.remove('selected');
  //     }
  //   });
  // }

  isOpen = false;
  openNav() {
    this.isOpen = true;
  }

  closeNav() {
    this.isOpen = false;
  }

  // Publicidad
  redirectModal() {
    // this.matDialog.open(ModalRedirectHomesComponent, {
    //   width: '612px',
    //   // height: '850px'
    // });
  }
}
