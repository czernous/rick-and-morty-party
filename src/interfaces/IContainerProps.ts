import { ISearchResultsProps } from "./ISearchResultsProps";
import { IPartyProps } from "./IPartyProps";
import { ICharacter } from "./ICharacter";

export interface IContainerProps extends ISearchResultsProps, IPartyProps {
  onSearchChange: (e: React.ChangeEvent) => void;
  searchValue: string;
  displayedCharacters: ICharacter[];
}
