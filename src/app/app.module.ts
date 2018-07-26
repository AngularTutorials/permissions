import { AppPermissionsService } from './services/app-permissions.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    AppPermissionsService,
    {
      provide: APP_INITIALIZER,
      useFactory: (ds: AppPermissionsService, ps: NgxPermissionsService) => function () {
        ds.load().then((data) => ps.loadPermissions(data));
      },
      deps: [AppPermissionsService, NgxPermissionsService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
