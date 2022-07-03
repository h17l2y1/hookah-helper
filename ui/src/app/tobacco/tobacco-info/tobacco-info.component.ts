import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TobaccoService} from "../../core/services/tobacco.service";
import {Tobacco} from "../../core/dto/tobacco";
import {Comment} from "../../core/dto/comment";

@Component({
  selector: 'app-tobacco-info',
  templateUrl: './tobacco-info.component.html',
  styleUrls: ['./tobacco-info.component.scss']
})
export class TobaccoInfoComponent implements OnInit {
  public tobacco: Tobacco;
  public comments: Array<Comment>;

  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
      private dialogRef: MatDialogRef<TobaccoInfoComponent>,
              private readonly tobaccoService: TobaccoService,) {
    if(data){
      this.tobaccoService.getAllById(data.tobaccoId).subscribe(response => {
        this.tobacco = response;
        this.tobacco.rating = 3;
        this.generateComments();
        console.log(response);
      })
    }
  }

  private generateComments(): void {
    this.comments = [
      {userName: 'Ярослав', text: 'Сладкий мягкий персик с привкусом «мыла» и химозным запахом с пачки, в миксах более менее, соло ужасно.', rating: 1},
      {userName: 'Андрей', text: 'Ничего необычного, просто свежий цитрус. Для миксов самый топ!', rating: 2},
      {userName: 'Владислав', text: 'Сладкий вкус, мне понравился. В соло не курил, брал на микс с Мимозой от Fumari.', rating: 3},
      {userName: 'Ярослав', text: 'Сладкий мягкий персик с привкусом «мыла» и химозным запахом с пачки, в миксах более менее, соло ужасно.', rating: 4},
      {userName: 'Андрей', text: 'Ничего необычного, просто свежий цитрус. Для миксов самый топ!', rating: 5},
      {userName: 'Владислав', text: 'Сладкий вкус, мне понравился. В соло не курил, брал на микс с Мимозой от Fumari.', rating: 1},
      {userName: 'Ярослав', text: 'Сладкий мягкий персик с привкусом «мыла» и химозным запахом с пачки, в миксах более менее, соло ужасно.', rating: 2},
      {userName: 'Андрей', text: 'Ничего необычного, просто свежий цитрус. Для миксов самый топ!', rating: 3},
      {userName: 'Владислав', text: 'Сладкий вкус, мне понравился. В соло не курил, брал на микс с Мимозой от Fumari.', rating: 4},
      {userName: 'Ярослав', text: 'Сладкий мягкий персик с привкусом «мыла» и химозным запахом с пачки, в миксах более менее, соло ужасно.', rating: 2},
      {userName: 'Андрей', text: 'Ничего необычного, просто свежий цитрус. Для миксов самый топ!', rating: 5},
      {userName: 'Владислав', text: 'Сладкий вкус, мне понравился. В соло не курил, брал на микс с Мимозой от Fumari.', rating: 4}
    ];
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }

  ngOnInit(): void {
  }
}
