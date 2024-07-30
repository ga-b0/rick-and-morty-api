import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonselectorComponent } from './pokemonselector.component';

describe('PokemonselectorComponent', () => {
  let component: PokemonselectorComponent;
  let fixture: ComponentFixture<PokemonselectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonselectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonselectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
