import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiberBlogComponent } from './ciber-blog.component';

describe('CiberBlogComponent', () => {
  let component: CiberBlogComponent;
  let fixture: ComponentFixture<CiberBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CiberBlogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CiberBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
