import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { IInfluencer, ISticky } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public stickyActive     : boolean       = false
  public liActive         : number        = -1
  public sticky           : ISticky[]     = []
  public listaInfluencers : IInfluencer[] = []

  constructor(
    private dataService : DataService
  ) { }

  ngOnInit(): void {
    this.sticky = this.dataService.sticky
    this.listaInfluencers = this.dataService.influencers
  }
  public setActive( valor : number ) : void {
    this.liActive = valor 
    this.stickyActive = false
  }
  public setStickyActive() : void {
    this.stickyActive = !this.stickyActive
  }
  
}
