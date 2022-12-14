import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {catchError, Observable, of} from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly apiRoute = `${environment.apiUrl}`;
  private readonly url = `${this.apiRoute}/search/users`;

  constructor(private http: HttpClient) {
  }

  search(login: string, pageSize: number, pageIndex: number) {
    let params = new HttpParams();
    params = params.append('q', `${login}`);
    params = params.append('per_page', `${pageSize}`);
    params = params.append('page', `${pageIndex}`);
    return this.http.get<any>(this.url, {params: params})
      .pipe(catchError(() => of({
        incomplete_results: false,
        items: [],
        total_count: 0
      })));


  }
}
