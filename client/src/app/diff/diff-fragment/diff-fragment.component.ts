import { Component, Input, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

const UPLOADER_OPTIONS = {
  autoUpload: true,
  allowedMimeType: ['text/plain'],
  url: '/api/upload'
};

@Component({
  selector: 'diff-fragment',
  templateUrl: './diff-fragment.component.html',
  styleUrls: ['./diff-fragment.component.css']
})
export class DiffFragmentComponent implements OnInit {
  @Input() fragmentName: string;
  public uploader: FileUploader = new FileUploader(UPLOADER_OPTIONS);
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    console.log(123);
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    console.log(555);
    this.hasAnotherDropZoneOver = e;
  }

  uploadFile(event) {
    console.log(event);
    console.log(this.uploader);
  }

}
