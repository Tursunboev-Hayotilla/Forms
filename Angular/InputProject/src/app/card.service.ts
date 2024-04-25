import { Injectable } from '@angular/core';
import { text } from 'stream/consumers';
import { Card } from './card';
import { title } from 'process';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  cards: Card[] = [
    {
      title: 'Nma gap',
      text: 'Bovottimi',
      photo:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3jfBOF6Hw47bZt3vLijxWj&ust=1712462823018000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOibnqbbrIUDFQAAAAAdAAAAABAJ',
    },
    {
      title: 'Nma gap yana',
      text: 'Bovottimi',
      photo:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3jfBOF6Hw47bZt3vLijxWj&ust=1712462823018000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOibnqbbrIUDFQAAAAAdAAAAABAJ',
    },
    {
      title: 'Nma gap yana',
      text: 'Bovottimi',
      photo:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FImage&psig=AOvVaw3jfBOF6Hw47bZt3vLijxWj&ust=1712462823018000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOibnqbbrIUDFQAAAAAdAAAAABAJ',
    }
  ];

  public GetAllCard(): Card[]{
    return this.cards;
  }
}