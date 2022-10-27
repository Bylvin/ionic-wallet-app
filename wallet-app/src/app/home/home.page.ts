// import error masalah IDE
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // features
  features = [
    {id: 1, name: 'Top Up', icon: 'assets/icons/topup.png', page: ''},
    {id: 2, name: 'Tarik Saldo', icon: 'assets/icons/withdrawal.png', page: ''},
    {id: 3, name: 'Kirim', icon: 'assets/icons/send.png', page: ''},
    {id: 4, name: 'Bayar', icon: 'assets/icons/debit-card.png', page: ''}
  ];

  constructor() {}

}
