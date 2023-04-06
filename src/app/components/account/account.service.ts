import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = 'http://localhost:3000/user'; // Altere para a URL da sua API

  constructor(private http: HttpClient) { }

  getBalance(): Observable<number> {
    return this.http.get<any>(`${this.apiUrl}/returnMoney/1`);
  }

  withdraw(amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/removeMoney/1`, { amount });
  }

  deposit(amount: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/addMoney/1`, { amount });
  }
}
