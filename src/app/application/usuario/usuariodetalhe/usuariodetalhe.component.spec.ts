import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuariodetalheComponent } from './usuariodetalhe.component';

describe('UsuariodetalheComponent', () => {
  let component: UsuariodetalheComponent;
  let fixture: ComponentFixture<UsuariodetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuariodetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuariodetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
