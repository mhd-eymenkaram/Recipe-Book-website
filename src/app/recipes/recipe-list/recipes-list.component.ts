import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("Burger","Recipe Description","https://i.pinimg.com/736x/a2/1a/68/a21a68142079dec294de7fb2af6a2d7f.jpg"),
    new Recipe("Pizza","Recipe Description","https://i.pinimg.com/736x/45/99/94/459994e791e58c2d6d4f5d2144384ad5.jpg")

  ];

  constructor(){
  }

  ngOnInit(): void {
  }

  

}
