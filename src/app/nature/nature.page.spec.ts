import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaturePage } from './nature.page';

describe('NaturePage', () => {
  let component: NaturePage;
  let fixture: ComponentFixture<NaturePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaturePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaturePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
