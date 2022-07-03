import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TobaccoComponent} from "./tobacco.component";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: TobaccoComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TobaccoRoutingModule { }
