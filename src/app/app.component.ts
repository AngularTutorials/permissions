import { NgxPermissionsService } from 'ngx-permissions';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ngxPermissionsService: NgxPermissionsService) {
    ngxPermissionsService.loadPermissions(['showTourOfHeroesLink', 'showCliDocumentationLink']);
  }
}
