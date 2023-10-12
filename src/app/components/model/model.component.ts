import { Model } from 'src/app/data/entities/Model';
import { Component, OnInit } from '@angular/core';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent {
  models: Model[] = [];

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.modelService.findAll().subscribe((data) => {
      this.models = data;
    });
  }
}
