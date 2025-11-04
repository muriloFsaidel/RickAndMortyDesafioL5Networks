import { Episode } from "./episodio";
import { Info } from "./info";

export interface EpisodeList {
   info: Info,
   results: Episode[];
}