import { Routes } from '@angular/router';
import { FormComponent } from './redux-crud/form/form.component';
import { DataComponent } from './redux-crud/data/data.component';

export const routes: Routes = [
    {
        path: "form",
        component: FormComponent
    },
    {
        path: "data",
        component: DataComponent
    }
];
