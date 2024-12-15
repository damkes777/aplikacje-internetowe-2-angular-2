import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {Routes} from "@angular/router";

export const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: 'add', component: AddPersonComponent },
    { path: '**', component: NotFoundComponent }
];