import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class CreateticketService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    Create(tickets:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.post(this.sharedService.WEB_API + '/tickets' + `?jwt_token=${jwt_token}`, tickets);
    }
    typesGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/types' + `?jwt_token=${jwt_token}`);
    }
    severityGetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/severity' + `?jwt_token=${jwt_token}`);
    }
}