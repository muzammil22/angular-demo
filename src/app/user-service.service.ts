import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    private baseUrl = "http://localhost:8081/api/users";
    private getUsersRoute = "/getAllUsers";
    private createUserRoute = "/create";

    constructor(
        private http: HttpClient
    ) { }

    getHeroes(): Observable<any> {
        return this.http.get(this.baseUrl + this.getUsersRoute);
    }

    createHeros(
        fname: string,
        lname: string,
        email: string,
        phone_num: string,
    ): Observable<any> {
        return this.http.post(
            
            this.baseUrl + this.createUserRoute,
            
            {
                fname: fname,
                lname: lname,
                email: email,
                phone_num: phone_num
            }

        )
    }
}
