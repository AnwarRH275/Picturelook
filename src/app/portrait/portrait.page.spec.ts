import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PortraitPage } from './portrait.page';

describe('PortraitPage', () => {
  let component: PortraitPage;
  let fixture: ComponentFixture<PortraitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortraitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PortraitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
