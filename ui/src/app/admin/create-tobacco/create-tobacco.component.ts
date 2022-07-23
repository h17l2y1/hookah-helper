import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TobaccoService} from "../../core/services/tobacco.service";
import {ToastrService} from "ngx-toastr";
import {CreateTobacco} from "../../core/dto/tobacco/create-tobacco.dto";
import { Inject, Injector } from "@angular/core";
import {BrandService} from "../../core/services/brand.service";
import {Brand} from "../../core/dto/brand/brand";



@Component({
    selector: 'app-create-tobacco',
    templateUrl: './create-tobacco.component.html',
    styleUrls: ['./create-tobacco.component.scss']
})
export class CreateTobaccoComponent implements OnInit {

    public createTobaccoForm: FormGroup;
    public brands: Array<Brand>;

    constructor(@Inject(Injector) private injector: Injector,
                public dialogRef: MatDialogRef<CreateTobaccoComponent>,
                private tobaccoService: TobaccoService,
                private notificationService: ToastrService,
                private brandService: BrandService,
                ) {
        this.notificationService = this.injector.get(ToastrService)
    }

    ngOnInit(): void {
        this.initCreateTobaccoData();
        // this.imageInfos = this.uploadService.getFiles();
    }

    initCreateTobaccoData(): void {
        this.brandService.getAll().subscribe(response => {
            this.brands = response;
            this.initCreateTobaccoForm();
        })
    }

    initCreateTobaccoForm(): void {
        this.createTobaccoForm = new FormGroup({
            brandId: new FormControl('', [Validators.required]),
            lineId: new FormControl(''),
            name: new FormControl('', [Validators.required]),
            madeIn: new FormControl('', [Validators.required]),
            description: new FormControl(''),
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

        this.tobaccoService.create(newTobacco).subscribe({
            next(x) {
                this.notificationService.success(`${newTobacco.name} created`);
            }
        });

    }
}
