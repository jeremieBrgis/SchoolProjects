import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeOkComponent } from './commande-ok.component';

describe('CommandeOkComponent', () => {
  let component: CommandeOkComponent;
  let fixture: ComponentFixture<CommandeOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
