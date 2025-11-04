import { Info } from "./info";
import { Location } from "./localizacao";

export interface LocationList {
   info: Info,
   results: Location[];
}