const obj :{name:string,age?:number,address:string} = {
    name:"binh",
    age:20,
    address:"Ha Noi"
}

// Interface

interface Book{
    authors:{id:number,name:string,slug:string}[],
    book_cover : string,
    categories:{id:number,name:string,is_leaf:boolean},
    current_seller:Seller
}

interface Seller{
    id:number,
    sku:string,
    name:string,
    link: string,
}
let book: Book;

let book2: Book;

let seller: Seller;

type images ={
    email: string,
    description: string,
}

type quantity_sold = {
    text: string,
    value: number,
}

type Admin = images & {
    list_price: number,
    name: string,
    original_price: number,
    
}






