import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChinaPage } from './china.page';

describe('ChinaPage', () => {
  let component: ChinaPage;
  let fixture: ComponentFixture<ChinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
