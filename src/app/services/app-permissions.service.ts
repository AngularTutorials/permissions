import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppPermissionsService {

  constructor() { }

  load(): Promise<string[]> {
    return Promise.resolve(['showTourOfHeroesLink', 'showCliDocumentationLink', 'showAngularBlogLink']);
  }
}
