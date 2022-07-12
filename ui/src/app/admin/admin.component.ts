import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateTobaccoComponent} from "./create-tobacco/create-tobacco.component";
import {CreateBrandComponent} from "./create-brand/create-brand.component";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public onCreateBrand(): void {
    const dialogRef = this.dialog.open(CreateBrandComponent, {
      width: '37%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  public onCreateTobacco(): void {
    const dialogRef = this.dialog.open(CreateTobaccoComponent, {
      width: '37%',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
