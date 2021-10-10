import ContainerStyle from "./components/Container/ContainerStyle";
import Container from "./components/Container";

import SearchResults from "./components/SearchResults";
import PartyResults from "./components/PartyResults";
import Input from "./components/Input";
import { IContainerProps } from "./interfaces/IContainerProps";

const App = () => {
  return (
    <ContainerStyle>
      <Container>
        {({
          onSearchChange,
          queryError,
          status,
          onDelete,
          onSelect,
          partyMorty,
          partyRick,
          searchValue,
          displayedCharacters,
        }: IContainerProps) => (
          <>
            <Input
              placeholder="Enter a character's name"
              onChange={onSearchChange}
              value={searchValue}
            />
            <SearchResults
              characters={displayedCharacters}
              status={status}
              queryError={queryError}
              onDelete={onDelete}
              onSelect={onSelect}
            />
            <PartyResults partyRick={partyRick} partyMorty={partyMorty} />
          </>
        )}
      </Container>
    </ContainerStyle>
  );
};

export default App;
