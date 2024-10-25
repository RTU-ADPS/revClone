import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferToFriendComponent } from './transfer-to-friend.component';

describe('TransferToFriendComponent', () => {
  let component: TransferToFriendComponent;
  let fixture: ComponentFixture<TransferToFriendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferToFriendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferToFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
