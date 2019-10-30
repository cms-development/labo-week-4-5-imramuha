import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { WordpressService } from '../../../services/wordpress.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-create',
  templateUrl: './creature-create.component.html',
  styleUrls: ['./creature-create.component.css']
})
export class CreatureCreateComponent implements OnInit {

  constructor(
    private wordpressService: WordpressService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createCreature(formData) {
    console.log(formData);

    const acf = {formData};

    this.wordpressService.createCreature(formData)
    .pipe(first())
    .subscribe(response => {
        console.log(response);
        alert('Your creature has been added');
        this.router.navigate(['/creatures']);
    });
  }

  goBack() {
    this.router.navigate(['/creatures']);
  }


}
