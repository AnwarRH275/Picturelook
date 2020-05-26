import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { PicturePage } from '../picture/picture.page';

@Component({
  selector: 'app-cute',
  templateUrl: './cute.page.html',
  styleUrls: ['./cute.page.scss'],
})
export class CutePage implements OnInit {
  defaultHref='/';
  constructor(private modalController:ModalController) { }
  async openPicture(img){
    console.log(img);
    const modal = await this.modalController.create({
    component: PicturePage, componentProps: {img:img,'lang':'Cute animals'} 
    });
    return await modal.present();
  }
  
  ngOnInit() {
  }

}
