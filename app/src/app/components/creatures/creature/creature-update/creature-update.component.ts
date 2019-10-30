import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { first } from 'rxjs/operators';

import { Creature } from '../../../../models/creature';
import { WordpressService } from '../../../../services/wordpress.service';

@Component({
  selector: 'app-creature-update',
  templateUrl: './creature-update.component.html',
  styleUrls: ['./creature-update.component.css']
})
export class CreatureUpdateComponent implements OnInit {

  creature: Creature[] = [];
  id: any;

  constructor(
    private wordpressService: WordpressService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCreature();
  }

  getCreature() {
    this.id = this.route.snapshot.params.id;

    this.wordpressService.getCreature(this.id).pipe(first()).subscribe(creature => {
      this.creature = creature;
      console.log(this.creature);
    });
  }

  goBack() {
    this.router.navigate(['/creatures']);
  }

  creatureUpdate() {
    console.log(this.creature);

    const data = this.creature;
    const title = data['title'].rendered;
    const id = this.creature['id'];

    this.wordpressService.creatureUpdate(id, title, data)
    .subscribe(response => {
      console.log(response);
      // this.router.navigate(['/creatures']);
    });

  }


}
