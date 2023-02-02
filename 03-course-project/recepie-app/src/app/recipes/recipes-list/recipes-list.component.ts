import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://lh3.googleusercontent.com/2LfchMbmtxopMRN_TM9QEDtaugIdpOBDF-SZf0xWcGOkQXKJ3fD3-BdRNrodYHyeI2nmPJKxKu6js_RejcB5zmY3CePfwF6Aqz1eMZPC=w1200-l75'
    ),
  ];
  constructor() {}
  ngOnInit() {}
}
