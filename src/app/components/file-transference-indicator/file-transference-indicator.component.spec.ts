import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTransferenceIndicatorComponent } from './file-transference-indicator.component';

describe('FileTransferenceIndicatorComponent', () => {
  let component: FileTransferenceIndicatorComponent;
  let fixture: ComponentFixture<FileTransferenceIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileTransferenceIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTransferenceIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
