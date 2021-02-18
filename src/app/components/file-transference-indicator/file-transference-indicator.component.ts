import { Component, Input, OnInit } from '@angular/core';
import { FileTransferenceData } from 'src/app/interfaces/fileTransformationData';
import { faFileAlt, faCheckCircle, faTrashAlt, IconDefinition } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-file-transference-indicator',
  templateUrl: './file-transference-indicator.component.html',
  styleUrls: ['./file-transference-indicator.component.css']
})
export class FileTransferenceIndicatorComponent implements OnInit {
  @Input() fileTransferenceData: FileTransferenceData[];
  faFileAlt: IconDefinition;
  faCheckCircle: IconDefinition;
  faTrashAlt: IconDefinition;

  constructor() {
    this.fileTransferenceData = [];
    this.faFileAlt = faFileAlt;
    this.faCheckCircle = faCheckCircle;
    this.faTrashAlt = faTrashAlt;
  }

  ngOnInit(): void {
  }

}
