import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatDialogRef} from "@angular/material/dialog";
import {TobaccoService} from "../../core/services/tobacco.service";

@Component({
    selector: 'app-create-tobacco',
    templateUrl: './create-tobacco.component.html',
    styleUrls: ['./create-tobacco.component.scss']
})
export class CreateTobaccoComponent implements OnInit {

    // selectedFiles?: FileList;
    // selectedFileNames: string[] = [];
    // progressInfos: any[] = [];
    // message: string[] = [];
    // previews: string[] = [];
    // imageInfos?: Observable<any>;
    public createTobaccoForm: FormGroup;

    // constructor(private uploadService: FileUploadService) { }
    constructor(public dialogRef: MatDialogRef<CreateTobaccoComponent>,
                private tobaccoService: TobaccoService) {
    }

    ngOnInit(): void {
        this.initCreateTobaccoForm();
        // this.imageInfos = this.uploadService.getFiles();
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
        let newTobacco = this.createTobaccoForm.value;
        // this.tobaccoService.create(newTobacco).subscribe(() => {
        // }, err => {
        //     console.log('Error: ', err)
        // });

        this.tobaccoService.create(newTobacco).subscribe({
            next(x) {
                console.log('got value ' + x);
            },
            error(err) {
                console.error('something wrong occurred: ' + err);
            },
            complete() {
                console.log('done');
            }
        });

    }

    //   selectFiles(event: any): void {
    //       this.message = [];
    //       this.progressInfos = [];
    //       this.selectedFileNames = [];
    //       this.selectedFiles = event.target.files;
    //       this.previews = [];
    //       if (this.selectedFiles && this.selectedFiles[0]) {
    //           const numberOfFiles = this.selectedFiles.length;
    //           for (let i = 0; i < numberOfFiles; i++) {
    //               const reader = new FileReader();
    //               reader.onload = (e: any) => {
    //                   console.log(e.target.result);
    //                   this.previews.push(e.target.result);
    //               };
    //               reader.readAsDataURL(this.selectedFiles[i]);
    //               this.selectedFileNames.push(this.selectedFiles[i].name);
    //           }
    //       }
    //   }
    //
    // uploadFiles(): void {
    //     this.message = [];
    //     if (this.selectedFiles) {
    //         for (let i = 0; i < this.selectedFiles.length; i++) {
    //             this.upload(i, this.selectedFiles[i]);
    //         }
    //     }
    // }
    //
    // upload(idx: number, file: File): void {
    //   this.progressInfos[idx] = { value: 0, fileName: file.name };
    //   if (file) {
    //     // this.uploadService.upload(file).subscribe(
    //     //     (event: any) => {
    //     //       if (event.type === HttpEventType.UploadProgress) {
    //     //         this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
    //     //       } else if (event instanceof HttpResponse) {
    //     //         const msg = 'Uploaded the file successfully: ' + file.name;
    //     //         this.message.push(msg);
    //     //         this.imageInfos = this.uploadService.getFiles();
    //     //       }
    //     //     },
    //     //     (err: any) => {
    //     //       this.progressInfos[idx].value = 0;
    //     //       const msg = 'Could not upload the file: ' + file.name;
    //     //       this.message.push(msg);
    //     //     });
    //   }
    // }

}
