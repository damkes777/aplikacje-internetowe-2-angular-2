import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
    providedIn: 'root'
})
export class PersonService {
    private storageKey = 'persons';

    constructor() {}

    private getPersons(): Person[] {
        const persons = localStorage.getItem(this.storageKey);
        return persons ? JSON.parse(persons) : [];
    }

    private savePersons(persons: Person[]): void {
        localStorage.setItem(this.storageKey, JSON.stringify(persons));
    }

    findAll(): Person[] {
        return this.getPersons();
    }

    find(index: number): Person | undefined {
        const persons = this.getPersons();
        return persons[index];
    }

    create(person: Person): void {
        const persons = this.getPersons();
        persons.push(person);
        this.savePersons(persons);
    }

    delete(index: number): void {
        const persons = this.getPersons();
        persons.splice(index, 1);
        this.savePersons(persons);
    }
}