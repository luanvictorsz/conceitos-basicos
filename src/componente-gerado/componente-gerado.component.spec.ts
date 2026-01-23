import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGeradoComponent } from './componente-gerado.component';

describe('ComponenteGeradoComponent', () => {
  let component: ComponenteGeradoComponent;
  let fixture: ComponentFixture<ComponenteGeradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponenteGeradoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponenteGeradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
