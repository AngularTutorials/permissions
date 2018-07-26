import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxPermissionsModule.forRoot()
  ],
  providers: [
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: (ds: DictionaryService, ps: NgxPermissionsService) => function () { return ds.load().then((data) => { return ps.loadPermissions(data) }) },
    //   deps: [LoadService, NgxPermissionsService],
    //   multi: true
    // }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
