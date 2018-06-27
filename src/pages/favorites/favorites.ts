import { Component } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  favoriteQuotes: Quote[];
  quotePage: any = 'QuotePage';

  constructor(private quotesService: QuotesService,
    private modalController: ModalController,
  private settingsService: SettingsService) {
  }

  ionViewWillEnter() {
    this.favoriteQuotes = this.quotesService.getFavorites();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalController.create(this.quotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove) {
        this.quotesService.removeQuoteFromFavorites(quote);

        const position = this.favoriteQuotes.findIndex((quoteEl: Quote) => {
          return quoteEl.id == quote.id;
      });

        this.favoriteQuotes.splice(position, 1);
      }
    });
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
