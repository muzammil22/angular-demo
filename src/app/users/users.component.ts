import { Component, OnInit } from '@angular/core';
import { UserService } from "../user-service.service";

export interface User {
    fname: string,
    lname: string,
    email: string,
    phone_num: string
}

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {


    user_list: User[] = [];

    constructor(
        private service: UserService
    ) { }

    ngOnInit(): void {
        this.service.getHeroes().subscribe( data => {
            console.log(data)
            this.user_list = data
        }, error => {
            console.log(error)
        })
    }

}
