import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favoriteQuotes: Quote[] = [];
  constructor(private quotesService: QuotesService) {
  }

  ionViewWillEnter() {
    this.favoriteQuotes = this.quotesService.getFavorites();
  }

}
