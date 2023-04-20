import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private fb: FormBuilder,private ps:ProductService,private router:Router) { }

  ngOnInit(): void {

  }
  addProductForm = this.fb.group({
    "id": [""],
    "productName": [""],
    "CategoryId": [""],
    "description": [""],
    "price": [""],
    "isAvailable": [""],
    "productImage": [""],
    "rating": [""],
    "review": [""],
    "vendorName": [""],
    "Warrenty": [""]
  })

 addProduct(){
  let pdata={
    "id": this.addProductForm.value.id,
    "productName": this.addProductForm.value.productName,
    "CategoryId": this.addProductForm.value.CategoryId,
    "description": this.addProductForm.value.description,
    "price":this.addProductForm.value.price,
    "isAvailable": this.addProductForm.value.isAvailable,
    "productImage": this.addProductForm.value.productImage,
    "rating":this.addProductForm.value.rating,
    "review":this.addProductForm.value.review,
    "vendorName": this.addProductForm.value.vendorName,
    "Warrenty": this.addProductForm.value.Warrenty

  }

  this.ps.addNewProduct(pdata).subscribe((item)=>{
    alert("New Product Added")
    this.router.navigateByUrl("products")

  })

 }


}
