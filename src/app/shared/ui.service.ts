import { Subject } from 'rxjs';
import { Injectable } from "@angular/core";

@Injectable( { providedIn: 'root' } )
export class UIService {
  loadingStateChanged = new Subject<boolean>();
}