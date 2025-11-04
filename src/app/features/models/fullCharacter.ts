import { Info } from "./info";
import { Character } from "./personagem";

export interface CharacterList {
   info: Info,
   results: Character[];
}