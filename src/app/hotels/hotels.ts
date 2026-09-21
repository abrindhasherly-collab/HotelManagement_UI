import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  imports: [],
  templateUrl: './hotels.html',
  styleUrl: './hotels.css'
})
export class Hotels {

  hotels = [
    {
      id: 1,
      name: 'Hotel Paradise',
      location: 'Nagercoil',
      price: 2500
    },
    {
      id: 2,
      name: 'Ocean View Hotel',
      location: 'Kanyakumari',
      price: 3500
    },
    {
      id: 3,
      name: 'Royal Stay',
      location: 'Trivandrum',
      price: 4000
    }
  ];

}