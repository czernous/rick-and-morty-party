import { ICharacter } from "./ICharacter";

export interface ISearchResultsProps {
  characters: ICharacter[];
  status: string;
  queryError: string;
  onDelete: (e: React.MouseEvent) => void;
  onSelect: (e: React.MouseEvent) => void;
}
