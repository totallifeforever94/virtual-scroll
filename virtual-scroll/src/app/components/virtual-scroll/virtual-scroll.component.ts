import { Component, OnInit } from '@angular/core';

import * as faker from 'faker';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.scss']
})
export class VirtualScrollComponent implements OnInit {
  public people: Array<any>;

  constructor() { }

  ngOnInit() {
    this.people = Array(100).fill(1).map(_ => {
      return {
        name: faker.name.findName(),
        bio: faker.hacker.phrase()
      };
    });
  }

}
