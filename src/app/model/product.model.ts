export class Product {
    
    constructor(
        public id?: number,     //se uso come modificatore public/private/prptected questi param diventano automaticam proprieta
        public name?: string,   //il ? serve per dire che questi param possono essere opzionali
        public category?: string,
        public description?: string,
        public price?: number) 
        { }
}