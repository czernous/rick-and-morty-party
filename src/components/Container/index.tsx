import { useQuery } from "@apollo/client";
import { GET_RM_CHARACTERS } from "../../queries/GetRmCharacters";
import {
  useDebounce,
  useSearchForm,
  useSkip,
  useChartacters,
  useChartactersFilter,
} from "../../hooks";

const Container = ({ children }: any) => {
  const { searchValue, onSearchChange } = useSearchForm();

  const query = useDebounce(searchValue);
  const skip = useSkip(query);

  const { data, error } = useQuery(GET_RM_CHARACTERS, {
    variables: { name: query },
    skip,
  });
  const { characters, queryError, status } = useChartacters(data, error);

  const { onDelete, onSelect, partyMorty, partyRick, displayedCharacters } =
    useChartactersFilter(characters);

  return children({
    onSearchChange,
    queryError,
    status,
    onDelete,
    onSelect,
    partyMorty,
    partyRick,
    displayedCharacters,
  });
};

export default Container;
