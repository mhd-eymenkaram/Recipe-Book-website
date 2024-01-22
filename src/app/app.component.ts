import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'resipe-book-project';
  loadedFeature ="recipe"

  constructor(){}

  ngOnInit(): void {
  }

  onNavigate(feature:any){
    this.loadedFeature = feature;
  }
}
