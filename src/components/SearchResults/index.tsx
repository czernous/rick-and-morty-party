import { ICharacter } from "../../interfaces/ICharacter";
import { ISearchResultsProps } from "../../interfaces/ISearchResultsProps";
import {
  ResultsGrid,
  Card,
  CardImage,
  CloseBtn,
  ErrorMsg,
} from "./SearchResultsStyles";

const SearchResults = ({
  characters,
  status,
  queryError,
  onDelete,
  onSelect,
}: ISearchResultsProps) => {
  return (
    <>
      {status !== "ERROR" ? (
        <ResultsGrid>
          {characters.map((c: ICharacter) => (
            <Card key={parseInt(c.id, 10)}>
              <CloseBtn
                className="results-item__btn"
                data-id={c.id}
                onClick={onDelete}
              >
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 1.00714L8.99286 0L5 3.99286L1.00714 0L0 1.00714L3.99286 5L0 8.99286L1.00714 10L5 6.00714L8.99286 10L10 8.99286L6.00714 5L10 1.00714Z"
                    fill="black"
                  />
                </svg>
              </CloseBtn>
              <CardImage
                data-id={c.id}
                src={c.image}
                alt={c.name}
                onClick={onSelect}
              />
            </Card>
          ))}
        </ResultsGrid>
      ) : (
        <ErrorMsg>{queryError}</ErrorMsg>
      )}
    </>
  );
};

export default SearchResults;
