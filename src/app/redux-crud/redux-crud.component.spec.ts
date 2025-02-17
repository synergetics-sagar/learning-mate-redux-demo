import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxCrudComponent } from './redux-crud.component';

describe('ReduxCrudComponent', () => {
  let component: ReduxCrudComponent;
  let fixture: ComponentFixture<ReduxCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReduxCrudComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReduxCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
