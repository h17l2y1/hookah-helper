import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";

@Component({
    selector: 'image-loader',
    templateUrl: './image-loader.component.html',
    styleUrls: ['./image-loader.component.scss']
})
export class ImageLoaderComponent implements OnInit {
    @Output() getImage = new EventEmitter<string | ArrayBuffer>();

    selectedFile?: File;
    previews: string[] = [];
    imageInfos?: Observable<any>;

    constructor() {
    }

    ngOnInit(): void {
    }

    selectFiles(event: any): void {
        this.selectedFile = event.target.files[0];
        this.previews = [];
        const reader = new FileReader();
        reader.onload = (e: any) => {
            this.previews.push(e.target.result);
            this.getImage.emit(reader.result);
        };
        reader.readAsDataURL(this.selectedFile);

        // let reader = new FileReader();
        // reader.readAsDataURL(file);
        // reader.onload = function () {
        //     //me.modelvalue = reader.result;
        //     console.log(reader.result);
        // };
        // reader.onerror = function (error) {
        //     console.log('Error: ', error);
        // };

        // this.getImage.emit(this.selectedFile);
    }

    upload(idx: number, file: File): void {
        // this.progressInfos[idx] = {value: 0, fileName: file.name};
        if (file) {
            // this.uploadService.upload(file).subscribe(
            //     (event: any) => {
            //       if (event.type === HttpEventType.UploadProgress) {
            //         this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
            //       } else if (event instanceof HttpResponse) {
            //         const msg = 'Uploaded the file successfully: ' + file.name;
            //         this.message.push(msg);
            //         this.imageInfos = this.uploadService.getFiles();
            //       }
            //     },
            //     (err: any) => {
            //       this.progressInfos[idx].value = 0;
            //       const msg = 'Could not upload the file: ' + file.name;
            //       this.message.push(msg);
            //     });
        }
    }

}
