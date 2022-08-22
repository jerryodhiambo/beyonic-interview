import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/core/constants/transactions.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  transactions = Transactions;
  constructor() {}

  ngOnInit(): void {}
}
