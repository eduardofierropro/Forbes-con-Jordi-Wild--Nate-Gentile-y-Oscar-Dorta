import { Component, Input, OnInit } from '@angular/core';
import { Rrss } from 'src/interfaces/interfaces';

@Component({
  selector: 'app-influencer',
  templateUrl: './influencer.component.html',
  styleUrls: ['./influencer.component.scss']
})
export class InfluencerComponent implements OnInit {
  @Input() grande      : any = false
  @Input() imagen      : any = '#'
  @Input() nombre      : string = 'Defecto'
  @Input() categoria   : string = 'Defecto'
  @Input() rrss        : Rrss[] = []
  @Input() descripcion : string = 'Defecto'

  constructor() { }

  ngOnInit(): void {}

}
