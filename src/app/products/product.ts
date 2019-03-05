
 export class IProduct {
   productId: number;
   productName: string;
   productCode: string;
   releaseDate: string;
   price: number;
   description: string;
   imageUrl: string;
 }
 export class Product { 
  constructor ( 
     public productid: number, 
     public productname: string 
  ) {  } 
}
