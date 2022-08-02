import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TobaccoService} from "../../core/services/tobacco.service";
import {ToastrService} from "ngx-toastr";
import {CreateTobacco} from "../../core/dto/tobacco/create-tobacco.dto";
import { Inject, Injector } from "@angular/core";
import {BrandService} from "../../core/services/brand.service";
import {Brand} from "../../core/dto/brand/brand";
import { forkJoin } from 'rxjs';
import { BrandLine } from '../../core/dto/brand-line/brand-line';
import { BrandLineService } from '../../core/services/brand-line.service';

@Component({
    selector: 'app-create-tobacco',
    templateUrl: './create-tobacco.component.html',
    styleUrls: ['./create-tobacco.component.scss']
})
export class CreateTobaccoComponent implements OnInit {

    public createTobaccoForm: FormGroup;
    public brands: Array<Brand>;
    public lines: Array<BrandLine>;

    constructor(@Inject(Injector) private injector: Injector,
                public dialogRef: MatDialogRef<CreateTobaccoComponent>,
                private tobaccoService: TobaccoService,
                private notificationService: ToastrService,
                private brandService: BrandService,
                private brandLineService: BrandLineService
                ) {
        this.notificationService = this.injector.get(ToastrService)
    }

    ngOnInit(): void {
        this.initCreateTobaccoData();
    }

    initCreateTobaccoData(): void {
        this.brandService.getAll().subscribe(response => {
            this.brands = response;
            this.initCreateTobaccoForm();
        });
    }

    initCreateTobaccoForm(): void {
        this.createTobaccoForm = new FormGroup({
            imageBase64: new FormControl('', [Validators.required]),
            brandId: new FormControl('', [Validators.required]),
            lineId: new FormControl('', [Validators.required]),
            name: new FormControl('', [Validators.required]),
            description: new FormControl(''),
        });

        this.createTobaccoForm.controls['brandId'].valueChanges.subscribe(value => {
            this.brandLineService.getByBrandId(value).subscribe( response => {
                this.lines = response;
                }
            );
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

    onSave(): void {
        if (!this.createTobaccoForm.valid){
            return;
        }

        let newTobacco = this.createTobaccoForm.value as CreateTobacco;

        this.tobaccoService.create(newTobacco).subscribe(() => {
            this.notificationService.success(`${newTobacco.name} created`);
            this.dialogRef.close();
        });

    }

    setImage(imageBase64: string | ArrayBuffer){
        this.createTobaccoForm.patchValue({imageBase64: imageBase64});
    }
}
