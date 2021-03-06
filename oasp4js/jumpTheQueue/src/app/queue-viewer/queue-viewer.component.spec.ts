import { QueueViewerComponent } from './queue-viewer.component';
import { QueueViewerService } from './shared/queue-viewer.service';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { CovalentDataTableModule, CovalentLayoutModule } from '@covalent/core';

describe('QueueViewerComponent', () => {
  let component: QueueViewerComponent;
  let fixture: ComponentFixture<QueueViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueueViewerComponent ],
      providers: [ QueueViewerService ],
      imports: [ MaterialModule,
                CovalentLayoutModule,
                CovalentDataTableModule,
                RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueueViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
