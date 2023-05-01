import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationTabsComponent } from './notification-tabs.component';

describe('NotificationTabsComponent', () => {
  let component: NotificationTabsComponent;
  let fixture: ComponentFixture<NotificationTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationTabsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
