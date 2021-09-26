import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],  //dipendenze dello store module
    declarations: [StoreComponent],
    exports: [StoreComponent]                           //posso usare questo modulo anche in altre parti
                                                        //dell'app
})

export class StoreModule { }