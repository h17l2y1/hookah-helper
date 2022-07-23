import {Component, Inject, Injector, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {BrandService} from "../../core/services/brand.service";
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
import {CreateBrand} from "../../core/dto/brand/create-brand.dto";

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.scss']
})
export class CreateBrandComponent implements OnInit {

  createBrandForm: FormGroup;
  private tempId = 0;

  constructor(@Inject(Injector) private injector: Injector,
              public dialogRef: MatDialogRef<CreateBrandComponent>,
              private notificationService: ToastrService,
              private brandService: BrandService,
              private formBuilder: FormBuilder,
  ) {
    this.notificationService = this.injector.get(ToastrService)
  }

  ngOnInit(): void {
    this.initCreateTobaccoForm();
  }

  onSave(): void {
    const request = this.createBrandForm.value as CreateBrand;
    request.lines = request.lines.map(x => ({ _id: x._id, name: x.name}));

    this.brandService.createWithDependencies(request).subscribe(() => {
      this.notificationService.success(`${request.name} created`);
      this.dialogRef.close();
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  initCreateTobaccoForm(): void {
    this.createBrandForm = this.formBuilder.group({
      image: '',
      name: '',
      lines: this.formBuilder.array([
        this.formBuilder.group({
          tempId: this.formBuilder.control(this.getNextId()),
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
          tempId: this.formBuilder.control(this.getNextId()),
          name: this.formBuilder.control('')
        })
    );
  }

  private getNextId(){
    return ++this.tempId;
  }

  onRemove(tempId: number){
    this.getLines.removeAt(tempId);
  }

  setImage(file: File){
    this.createBrandForm.patchValue({image: file});
  }

  getBase64(file: File) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      //me.modelvalue = reader.result;
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

}
