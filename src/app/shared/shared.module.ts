import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
    imports: [AngularMaterialModule, ReactiveFormsModule, CommonModule],
    declarations: [SidenavComponent, FooterComponent],
    exports: [SidenavComponent, FooterComponent]
})
export class SharedModule { }
