import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  balance: any = '---Hidden---';
  value: number = 0;

  constructor(
    private http: HttpClient,
    private accountService:AccountService) {}

  getBalance():void {
    this.accountService.getBalance().subscribe(data => {
      const balanced = data;
      this.balance = balanced
    })
  }

  withdraw() {
    if (this.value > this.balance) {
      alert('Dont have enough money');
    } else {
      this.balance -= this.value;
      this.accountService.withdraw(this.value).subscribe();
    }
  }

  deposit() {
    this.balance = Number(this.balance) + Number(this.value);
    this.accountService.deposit(this.value).subscribe();
  }
}
