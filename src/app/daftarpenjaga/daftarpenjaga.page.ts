import { Component, OnInit } from '@angular/core';
import { ToastController} from '@ionic/angular'

@Component({
  selector: 'app-daftarpenjaga',
  templateUrl: './daftarpenjaga.page.html',
  styleUrls: ['./daftarpenjaga.page.scss'],
})
export class DaftarpenjagaPage implements OnInit {

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
