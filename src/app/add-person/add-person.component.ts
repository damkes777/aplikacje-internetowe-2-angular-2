import {Component, OnInit} from '@angular/core';
import {PersonService} from "../person-service.service";
import {FormsModule} from "@angular/forms";
import {Person} from "../person";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-person',
    imports: [
        FormsModule
    ],
  templateUrl: './add-person.component.html',
  styleUrl: './add-person.component.css'
})
export class AddPersonComponent implements OnInit{
    firstName: string = ''
    familyName: string = ''
    age: number = 0;
    city: string = ''
    street: string = ''
    postCode: string = ''


    constructor(private personService: PersonService, private router: Router) {
    }

    ngOnInit(): void {
    }

    create(): void {
        const newPerson: Person = {
            firstName: this.firstName,
            familyName: this.familyName,
            age: this.age,
            address: {
                city: this.city,
                street: this.street,
                postCode: this.postCode
            }
        };

        this.personService.create(newPerson)
        this.router.navigate(['/'])
    }
}
