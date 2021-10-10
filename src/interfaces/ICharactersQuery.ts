import { ICharacter } from "./ICharacter";

export interface ICharactersQuery {
  characters: ICharacter[] | never[];
  status: string;
  queryError: string;
}
