import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PicturePage } from '../picture/picture.page';

@Component({
  selector: 'app-china',
  templateUrl: './china.page.html',
  styleUrls: ['./china.page.scss'],
})
export class ChinaPage implements OnInit {
  defaultHref = '/';
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }
  
  async openPicture(img){
    console.log(img);
    const modal = await this.modalController.create({
    component: PicturePage, componentProps: {img:img,'lang':'china'} 
    });
    return await modal.present();
  }
  
}
