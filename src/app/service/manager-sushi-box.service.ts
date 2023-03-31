import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IBox } from 'src/model/IBox';

@Injectable({
  providedIn: 'root'
})
export class ManagerSushiBoxService {

  constructor(private http: HttpClient) {
  }

  public getSushiBoxes(): Observable<IBox[]> {
    return this.http.get<IBox[]>(environment.apiSushi)
  }

}
