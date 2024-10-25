import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendHistoryComponent } from './friend-history.component';

describe('FriendHistoryComponent', () => {
  let component: FriendHistoryComponent;
  let fixture: ComponentFixture<FriendHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FriendHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
