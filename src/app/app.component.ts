import { Component, ElementRef, QueryList, ViewChild, ViewChildren, ViewEncapsulation, viewChildren } from '@angular/core';

import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'ProAcademy-signal';
  
}
