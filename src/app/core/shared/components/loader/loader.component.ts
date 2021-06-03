import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

import { LoaderService } from '@/core/services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;
  isLoading: BehaviorSubject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {}
}
