import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Brand } from 'src/app/data/entities/Brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent implements OnInit {
  brands: Brand[] = [];
  allBrands: Brand[] = [];
  brandForm!: FormGroup;

  constructor(private brandService: BrandService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.findAll();
    this.createForm();
  }

  createForm() {
    this.brandForm = this.fb.group({
      name: ['', Validators.required],
    });
  }

  findAll(): void {
    this.brandService.findAll().subscribe((data) => {
      this.brands = data;
      this.allBrands = data;
    });
  }

  findByName(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value.toLowerCase();

    this.brands = this.allBrands.filter((brand) =>
      brand.name.toLowerCase().includes(value)
    );
  }

  async create() {
    if (this.brandForm.invalid) return;

    const data: Brand = this.brandForm.value;

    await this.brandService.create(data).subscribe(() => this.findAll());

    this.brandForm.reset();
  }

  async delete(id: number) {
    if (id) {
      await this.brandService.delete(id).subscribe(() => this.findAll());
    }
  }
}
