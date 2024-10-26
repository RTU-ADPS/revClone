import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from "@angular/router";
import {LucideAngularModule} from "lucide-angular";
import {DemodataService} from "../shared/demodata.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {Payment} from "../shared/payment";
import {v4 as uuidv4} from 'uuid';
import {PaymentUser} from "../shared/payment-user";

@Component({
  selector: 'app-transfer-to-friend',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './transfer-to-friend.component.html',
  styleUrl: './transfer-to-friend.component.css'
})
export class TransferToFriendComponent implements OnInit {
  friendId: string = '';
  action: string = '';
  paymentForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private demodata: DemodataService,
              private fb: FormBuilder,
              private router: Router) {
    this.paymentForm = this.fb.group({
      amount: [null, [Validators.required, Validators.min(0.01)]],
      description: ['']
    });
  }

  ngOnInit(): void {
    this.friendId = this.route.snapshot.paramMap.get('id') ?? '';
    this.action = this.route.snapshot.paramMap.get('action') ?? '';
  }

  // add a response that says 'you sent [] to []'

  processPayment(): void {
    const payment = this.createPayment();
    const user = this.demodata.getMainUser();
    const paymentToUser = this.createPaymentToUser(payment.id);
    if (this.action === 'request') {
      payment.amount = -payment.amount;
    }
    user.userBalance += payment.amount;
    this.demodata.addPaymentToHistory(paymentToUser);
    this.demodata.addPaymentToMainUser(payment);

    const friendUser = this.getFriendUser();
    console.log(this.demodata.getPaymentHistoryMainUser())
    this.router.navigate(['/payments', this.friendId]).then(r => console.log(r));
  }

  createPayment(): Payment {
    const { amount, description } = this.paymentForm.value;
    return {
      amount,
      date: new Date().toISOString(),
      description,
      id: uuidv4()
    };
  }

  createPaymentToUser(paymentId: string): PaymentUser {
    return {
      userId: this.friendId,
      paymentId: paymentId
    }
  }

  onSubmit(): void {
    if (this.paymentForm.valid) {
      this.processPayment();
    } else {
      console.error("Form is invalid");
    }
  }

  getFriendUser() {
    return this.demodata.getUserById(this.friendId);
  }

}
