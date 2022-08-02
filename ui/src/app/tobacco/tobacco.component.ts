import { Component, OnInit } from '@angular/core';
import {TobaccoService} from "../core/services/tobacco.service";
import {Tobacco} from "../core/dto/tobacco/tobacco";
import {ActivatedRoute} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {TobaccoInfoComponent} from "./tobacco-info/tobacco-info.component";

@Component({
  selector: 'app-tobacco',
  templateUrl: './tobacco.component.html',
  styleUrls: ['./tobacco.component.scss']
})
export class TobaccoComponent implements OnInit {

  public tobaccos: Array<Tobacco>;
  private sub: any;

  constructor(private readonly tobaccoService: TobaccoService,
              private route: ActivatedRoute,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      let id = this.route.snapshot.paramMap.get('id');
      if (id){
        this.tobaccoService.getByBrandId(id).subscribe(response => {
          this.tobaccos = response;
        });
      }
      this.tobaccoService.getAll().subscribe(response => {
        this.tobaccos = response;
      })
    });
  }

  public onTobacco(tobaccoId: string) {
    const dialogRef = this.dialog.open(TobaccoInfoComponent, {
      // width: '90%',
      height: '60%',
      panelClass: 'custom-modalbox',
      data:{
        tobaccoId: tobaccoId,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
