import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class TicketsgetallService {
    constructor(
        private sharedService: SharedService,
        private http: HttpClient,
    ) { }

    GetAllValues(): Observable<any> {
        let jwt_token = sessionStorage.getItem('JwtToken');
 	 	return this.http.get(this.sharedService.WEB_API + '/tickets' + `?jwt_token=${jwt_token}`);
    }
}