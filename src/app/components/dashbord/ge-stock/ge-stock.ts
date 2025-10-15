import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';

@Component({
  selector: 'app-ge-stock',
  imports: [RouterOutlet, 
    MatTabsModule,
    RouterModule,
    CommonModule,
    MatDividerModule ],
  templateUrl: `ge-stock.html`,
  styleUrls: [`ge-stock.css`]
})
export class GeStock implements OnInit {
  ngOnInit(): void {
    this.activeLink=this.router.url.replace('/ge-stock/','')
  }
  private router = inject(Router)
  activeLink!:string;
  links=[
    {name: "Vente",url: "sale"},
    {name: "Approvisionnement",url: "purchase"},
    {name: "Stock",url: "stock"},
    {name: "Archive",url: "archive"},
  ]

}
