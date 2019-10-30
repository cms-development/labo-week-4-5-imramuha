import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { WordpressService } from '../../../services/wordpress.service';

import { Creature } from '../../../models/creature';

@Component({
  selector: 'app-creature',
  templateUrl: './creature.component.html',
  styleUrls: ['./creature.component.css']
})
export class CreatureComponent implements OnInit {

  creature: Creature[] = [];
  id: any;

  constructor(
    private wordpressService: WordpressService,
    private router: Router,
    private route: ActivatedRoute,
  ) {

   }

  ngOnInit() {
    this.getCreature();
  }

  getCreature() {
    this.id = this.route.snapshot.params.id;

    this.wordpressService.getCreature(this.id).pipe(first()).subscribe(creature => {
      this.creature = creature;
      // console.log(this.creature);
    });
  }

  deleteCreature(id) {
    this.wordpressService.deleteCreature(id).pipe(first()).subscribe(response => {
      console.log(response);
      alert('Creature is verwijderd');
      this.router.navigate(['/creatures']);
    });
  }

  goBack() {
    this.router.navigate(['/creatures']);
  }

}
