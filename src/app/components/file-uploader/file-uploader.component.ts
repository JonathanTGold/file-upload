import { Component, OnInit } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Observable } from 'rxjs';
import { FileTransferenceData } from 'src/app/interfaces/fileTransformationData';
import { faChevronDown, faChevronUp, faTimes, IconDefinition, faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  fileTransferenceData: FileTransferenceData[];
  isMinimized: boolean;
  isUploading: boolean;
  faChevronDown: IconDefinition;
  faChevronUp: IconDefinition;
  faTimes: IconDefinition;
  faUpload: IconDefinition;

  constructor(private storage: AngularFireStorage) {
    this.fileTransferenceData = [];
    this.isMinimized = false;
    this.isUploading = false;
    this.faChevronDown = faChevronDown;
    this.faChevronUp = faChevronUp;
    this.faTimes = faTimes;
    this.faUpload = faUpload;
  }

  ngOnInit(): void {
  }

  uploadFiles(event): void {
    this.isUploading = true;
    const files: FileList = event.target.files;
    for (let index = 0; index < files.length; index++) {
      const file: File = files[index];
      const fileNmae: string = file.name;
      const filePath: string = 'files/' + Math.random();
      const task: AngularFireUploadTask = this.storage.upload(filePath, file);
      const percentage: Observable<number> = task.percentageChanges()
      const snapshotChanges: Observable<UploadTaskSnapshot | undefined> = task.snapshotChanges()
      this.fileTransferenceData.push(new FileTransferenceData(fileNmae, percentage, snapshotChanges, task.cancel))
    }
  }

  minimize(): void {
    this.isMinimized = !this.isMinimized;
  }

  cancelAll(): void {
    for (const file of this.fileTransferenceData) {
      file.cancel()
    }
  }
}
