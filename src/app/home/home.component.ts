import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserService } from '../user-service.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    user_form = new FormGroup({
		first_name: new FormControl('', [Validators.required]),
		last_name: new FormControl('', [Validators.required]),
		email: new FormControl('', [Validators.required, Validators.email]),
		phone_num: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$"),
        Validators.minLength(11), Validators.maxLength(11)]),
	});

    submitted: boolean = false;
    result: boolean = false;

    constructor(
        private service: UserService
    ) { }

    ngOnInit(): void {
    }

    submit(formDirective: FormGroupDirective){
        console.log(formDirective)
        let values = this.user_form.value
        if(formDirective.valid){
            this.service.createHeros(
                values.first_name,
                values.last_name,
                values.email,
                values.phone_num
            ).subscribe( data => {
                console.log(data.message)
                alert(data.message)
                formDirective.resetForm()
            }, error => {
                console.log(error)
                alert(error)
            })
        }
    }

}
