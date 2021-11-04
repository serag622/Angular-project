import { Language } from "./Language.model";

export interface BasicData{
  id ?: number,
  name : string,
  desc : string,
  lang ?: Language[]
}
