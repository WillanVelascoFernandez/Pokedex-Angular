import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajeRecuperarPasswordComponent } from './mensaje-recuperar-password.component';

describe('MensajeRecuperarPasswordComponent', () => {
  let component: MensajeRecuperarPasswordComponent;
  let fixture: ComponentFixture<MensajeRecuperarPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajeRecuperarPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajeRecuperarPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
