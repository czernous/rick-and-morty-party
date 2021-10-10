import { ICharacter } from "./ICharacter";

export interface IQueryResult {
  characters: {
    info: {
      count: number;
      __typename: string;
    };
    results: ICharacter[];
  };
}
