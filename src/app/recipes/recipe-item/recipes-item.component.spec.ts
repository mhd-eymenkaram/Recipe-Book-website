import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesItemComponent } from './recipes-item.component';

describe('RecipesItemComponent', () => {
  let component: RecipesItemComponent;
  let fixture: ComponentFixture<RecipesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesItemComponent]
    });
    fixture = TestBed.createComponent(RecipesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
