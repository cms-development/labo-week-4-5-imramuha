import { Component, OnInit } from '@angular/core';

import { first } from 'rxjs/operators';

import { Creature } from '../../models/creature';
import { WordpressService } from '../../services/wordpress.service';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.component.html',
  styleUrls: ['./creatures.component.css']
})
export class CreaturesComponent implements OnInit {

  creatures: any;

  constructor(private wordpressService: WordpressService) { }

  ngOnInit() {
    this.getCreatures();
  }

  getCreatures() {
    this.wordpressService.getCreatures().pipe(first()).subscribe(creature => {
      this.creatures = creature;
      console.log(this.creatures);
    });
  }



}
