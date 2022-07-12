import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {BrandService} from "../../core/services/brand.service";
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent implements OnInit {

  public createBrandForm: FormGroup;

  constructor(@Inject(Injector) private injector: Injector,
              public dialogRef: MatDialogRef<CreateBrandComponent>,
              private notificationService: ToastrService,
              private brandService: BrandService,
              private formBuilder: FormBuilder) {
    this.notificationService = this.injector.get(ToastrService)
  }

  ngOnInit(): void {
    this.initCreateTobaccoForm();
  }

  initCreateTobaccoForm(): void {
    this.createBrandForm = this.formBuilder.group({
      name: '',
      lines: this.formBuilder.array([
        this.formBuilder.group({
          name: this.formBuilder.control('')
        })
      ]),
      madeIn: '',
      description: '',
    });
  };

  get getLines(): FormArray {
    return this.createBrandForm.get('lines') as FormArray;
  }

  addLine(): void {
    this.getLines.push(
        this.formBuilder.group({
          name: this.formBuilder.control('')
        })
    );
  }

  onSave(): void {

  }

  onCancel(): void {
    this.dialogRef.close();
  }


}
