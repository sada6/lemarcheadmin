import { Component, inject} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { appTitle } from '../../app.config';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import {MatDrawer, MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MediaQueryObserverService } from '../../core/services/utility/media-query-observer.service';
import { LetDirective } from '@ngrx/component';

@Component({
  selector: 'app-dashbord',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    NgOptimizedImage,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    CommonModule,
    LetDirective
],
  templateUrl: `./dashbord.html`,
  styleUrls: [`./dashbord.css`]
})
export class Dashbord {
  appTitre=appTitle;
  viewPoint$ = inject(MediaQueryObserverService).mediaQuery();
  
  toggleDrawer(drawer: MatDrawer, viewPoint: string|undefined) {
    if (viewPoint === 'Large' || viewPoint ==='XLarge') {
      return null;
    }else{
      return drawer?.toggle();
    }
  }
}
