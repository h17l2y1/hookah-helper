import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { CreateTobaccoComponent } from './create-tobacco/create-tobacco.component';
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {ToastrModule} from "ngx-toastr";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { CreateBrandComponent } from './create-brand/create-brand.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [AdminComponent, CreateTobaccoComponent, CreateBrandComponent],
    imports: [
        CommonModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatProgressBarModule,
        ReactiveFormsModule,
        MatDialogModule,
        ToastrModule.forRoot(),
        MatOptionModule,
        MatSelectModule,
        MatIconModule
    ]
})
export class AdminModule { }
