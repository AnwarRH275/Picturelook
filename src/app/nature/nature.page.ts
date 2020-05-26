import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PicturePage } from '../picture/picture.page';

@Component({
  selector: 'app-nature',
  templateUrl: './nature.page.html',
  styleUrls: ['./nature.page.scss'],
})
export class NaturePage implements OnInit {
  defaultHref='/';
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  async openPicture(img){
    console.log(img);
    const modal = await this.modalController.create({
    component: PicturePage, componentProps: {img:img,'lang':'Nature'} 
    });
    return await modal.present();
  }
}
