import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

//decoratore per creare feature modules
@NgModule({
 providers: [ProductRepository, StaticDataSource] //dice ad angular quali classi devono essere usate
                                                  //come servizi per la depndency injection feature
})

export class ModelModule { }