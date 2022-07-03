import { Component, OnInit } from '@angular/core';
import {Tobacco} from "../core/dto/tobacco";
import {Brand} from "../core/dto/brand";
import {TobaccoService} from "../core/services/tobacco.service";
import {BrandService} from "../core/services/brand.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  public tobaccos: Array<Tobacco>;
  public brands: Array<Brand>;

  constructor(private readonly tobaccoService: TobaccoService,
              private router: Router,
              private readonly brandService: BrandService) { }

  ngOnInit(): void {
    this.brandService.getAll().subscribe(response => {
      this.brands = response;
    })
  }

  public onBrand(brandId: string) {
    console.log(brandId);
    this.router.navigateByUrl(`/tobacco/${brandId}`);
  }

}
