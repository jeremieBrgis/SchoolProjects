import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeKoComponent } from './commande-ko.component';

describe('CommandeKoComponent', () => {
  let component: CommandeKoComponent;
  let fixture: ComponentFixture<CommandeKoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeKoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeKoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
