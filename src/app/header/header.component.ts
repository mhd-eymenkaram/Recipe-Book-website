import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() featureSelected = new EventEmitter<string>();

  constructor(){}

  ngOnInit(): void {
  }

  OnSelect(feature:any){
    this.featureSelected.emit(feature)
  }

}
