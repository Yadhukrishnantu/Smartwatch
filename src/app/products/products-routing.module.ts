import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductComponent } from './view-product/view-product.component';

  const routes: Routes = [
{ path: '', component:ViewAllProductsComponent },
{path:"add_Product", component:AddProductComponent},
{path:"delete_Product/:id", component:DeleteProductComponent},
{path:"edit_Product/:id" , component:EditProductComponent},
{path:"view_Product/:id" , component:ViewProductComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
