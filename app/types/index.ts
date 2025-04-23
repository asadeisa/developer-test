
export interface User {
  id : number , 
  name : string ,
  userName : string , 
  password  : string | number ,
}
export interface Product {
  id : number ,
  image : string ,
  title : string ,
  category : string ,
  rating : {
    rate : number | string , 
    count : number
  } ,
  description : string ,
  price : number | string 

}
export interface CartItem{
  id: number,
  title: string,
  price:  number,
  quantity: number
}