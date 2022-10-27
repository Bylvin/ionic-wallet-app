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

  transactions = [
    {id: 1, name: 'Coffee Janji Jiwa', time: '09:00PM', amount: 'Rp25,000', color: 'danger', page: ''},
    {id: 2, name: 'OYO Tendean', time: '06:00PM', amount: 'Rp200,000', color: 'danger', page: ''},
    {id: 3, name: 'Top Up Saldo', time: '05:00PM', amount: 'Rp300,000', color: 'success', page: ''},
    {id: 4, name: 'Transfer Joana', time: '09:00AM', amount: 'Rp200,000', color: 'danger', page: ''},
    {id: 5, name: 'Beli Pulsa byU', time: '07:00AM', amount: 'Rp75,000', color: 'danger', page: ''}
  ];

  constructor() {}

}
