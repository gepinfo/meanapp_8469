import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class UpdateseverirtyService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    Update(severity:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.put(this.sharedService.WEB_API + '/severity' + `?jwt_token=${jwt_token}`, severity);
    }
    GetEntityById(severityId:any): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/severity/' + severityId + `?jwt_token=${jwt_token}`);
    }
}