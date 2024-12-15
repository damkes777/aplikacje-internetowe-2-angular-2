import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../person-service.service";
import {Person} from "../person";
import {NgIf} from "@angular/common";

@Component({
    selector: 'app-details',
    imports: [
        NgIf
    ],
    templateUrl: './details.component.html',
    styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
    person: Person | undefined;

    constructor(private route: ActivatedRoute,
                private personService: PersonService) {
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.person = this.personService.find(params['id'])
        })
    }
}
