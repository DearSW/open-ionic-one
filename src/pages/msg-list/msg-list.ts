import { Component } from '@angular/core';

import { PopoverController } from 'ionic-angular';

import { PopoverPage } from './popover-page';

@Component({
    selector: 'msg-list',
    templateUrl: './msg-list.html'
})
export class MsgList {
    constructor(public popoverCtrl: PopoverController) {

    }

    // 	presentPopover(ev) {
    //     let popover = this.popoverCtrl.create(PopoverPage);
    //     popover.present({
    //       ev: ev
    //     });
    // }
    xxx(myEvent) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({
            ev: myEvent
        });
    }
}
