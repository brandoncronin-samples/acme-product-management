import { NgModule } from '@angular/core';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductRoutingModule } from './product-routing.module';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe
  ],
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductsModule { }
