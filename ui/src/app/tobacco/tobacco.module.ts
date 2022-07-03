import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TobaccoRoutingModule} from "./tobacco-routing.module";
import {TobaccoComponent} from "./tobacco.component";
import { TobaccoInfoComponent } from './tobacco-info/tobacco-info.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {NgbRatingModule} from "@ng-bootstrap/ng-bootstrap";
import {MatCardModule} from "@angular/material/card";
import {MatTabsModule} from "@angular/material/tabs";
import {ScrollingModule} from "@angular/cdk/scrolling";

@NgModule({
  declarations: [TobaccoComponent, TobaccoInfoComponent],
    imports: [
        CommonModule,
        TobaccoRoutingModule,
        MatDialogModule,
        MatIconModule,
        NgbRatingModule,
        MatCardModule,
        MatTabsModule,
        ScrollingModule
    ]
})
export class TobaccoModule { }
