import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/data/entities/Brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];

  constructor(private brandService: BrandService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.brandService.findAll().subscribe((data) => {
      this.brands = data;
    });
  }
}
