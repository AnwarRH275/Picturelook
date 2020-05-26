import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CutePage } from './cute.page';

describe('CutePage', () => {
  let component: CutePage;
  let fixture: ComponentFixture<CutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
