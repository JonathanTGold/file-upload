import { UploadTaskSnapshot } from '@angular/fire/storage/interfaces';
import { Observable } from 'rxjs'; 

export class FileTransferenceData {
    constructor(
        readonly fileName:string, 
        readonly percentage: Observable<number>,
        readonly snapshotChanges: Observable<UploadTaskSnapshot | undefined>,
        readonly cancel: () => boolean) { }
}