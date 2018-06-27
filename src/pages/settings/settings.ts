import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsSer: SettingsService) {

  }

  checkAltBackground() {
    return this.settingsSer.isAltBackground();
  }

  onToggle(toggle: Toggle) {
    this.settingsSer.setAltBackground(toggle.checked);
  }
}
