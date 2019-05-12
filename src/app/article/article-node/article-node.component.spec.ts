import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNodeComponent } from './article-node.component';

describe('ArticleNodeComponent', () => {
  let component: ArticleNodeComponent;
  let fixture: ComponentFixture<ArticleNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
