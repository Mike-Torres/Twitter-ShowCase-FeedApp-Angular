import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable({
  providedIn: 'root'
})
export class TweetService {constructor (private http:HttpClient) {}

   private configUrl = 'api/tweets';

    getTweets(): Observable<any> {
       this.http.get(this.configUrl);
    }
}


