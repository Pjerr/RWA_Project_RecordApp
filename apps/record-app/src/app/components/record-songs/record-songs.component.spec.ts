import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordSongsComponent } from './record-songs.component';

describe('RecordSongsComponent', () => {
  let component: RecordSongsComponent;
  let fixture: ComponentFixture<RecordSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordSongsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
