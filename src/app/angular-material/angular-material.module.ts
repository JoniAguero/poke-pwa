import { NgModule } from '@angular/core';
import {
    MatMenuModule, MatIconModule
} from '@angular/material';

@NgModule({
    imports: [MatMenuModule, MatIconModule ],
    exports: [MatMenuModule, MatIconModule ],
})
export class AngularMaterialModule { }
