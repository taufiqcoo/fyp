import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular'

@Component({
  selector: 'app-daftaranak',
  templateUrl: './daftaranak.page.html',
  styleUrls: ['./daftaranak.page.scss'],
})
export class DaftaranakPage implements OnInit {

  constructor(public toastController: ToastController) {

   }
   async openToast() {
    const toats = await this.toastController.create({
      message: ' dah siap.',
      duration: 2000
    });
    toats.present();
  }

  ngOnInit() {
  }

}
