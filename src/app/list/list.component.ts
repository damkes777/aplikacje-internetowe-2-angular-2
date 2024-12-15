import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {PersonService} from "../person-service.service";
import {Person} from "../person";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-list',
    imports: [
        RouterLink,
        NgForOf
    ],
    templateUrl: './list.component.html',
    styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
    persons: Person[] = [];

    constructor(private personService: PersonService) {

    }

    ngOnInit(): void {
        this.persons = this.personService.findAll()
    }

    delete(id: number): void {
        this.personService.delete(id)
        this.ngOnInit()
    }
}
