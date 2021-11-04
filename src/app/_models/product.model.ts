import { BasicData } from "./BasicData.model";
import { catogrey } from "./catogrey.model";
import { payment } from "./payment.model";
import { Tag } from "./Tag.model";

export interface Product{
    id : number;
    basicData : BasicData[];
    price : number;
    discount?: number;
    paymentType: payment[]
    catogrey?:catogrey;
    tags?: Tag[]
    imgUrls: string[];
    relatedProductsIds?: number[];
}
