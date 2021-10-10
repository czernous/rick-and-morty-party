import React, { useCallback, useEffect, useState } from "react";
import { ICharacter } from "./interfaces/ICharacter";
import { ICharactersQuery } from "./interfaces/ICharactersQuery";
import { IQueryResult } from "./interfaces/IQueryResult";
export const useDebounce = (value: string, delay: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useSearchForm = () => {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = useCallback((e) => setSearchValue(e.target.value), []);

  return {
    searchValue,
    onSearchChange,
  };
};

export const useSkip = (query: string) => {
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setSkip(true);
    } else {
      setSkip(false);
    }
  }, [query]);

  return skip;
};

export const useChartacters = (
  data: IQueryResult,
  queryError: any
): ICharactersQuery => {
  const [charState, setCharState] = useState<ICharactersQuery>({
    characters: [],
    status: "IDLE",
    queryError: "",
  });

  useEffect(() => {
    if (!data) {
      setCharState({ characters: [], status: "IDLE", queryError: "" });
      if (queryError !== undefined)
        return setCharState({
          characters: [],
          status: "ERROR",
          queryError: queryError.message,
        });
      return;
    }

    const charactersArray: ICharacter[] = data.characters.results;

    setCharState({
      characters: charactersArray,
      status: "SUCCES",
      queryError: "",
    });
  }, [data, queryError]);

  return charState;
};

export const useChartactersFilter = (characters: ICharacter[]) => {
  const [deletedItems, setDeletedItems] = useState<number[]>([]);
  const [partyRick, setPartyRick] = useState<ICharacter>();
  const [partyMorty, setPartyMorty] = useState<ICharacter>();

  const getID = (e: React.MouseEvent) => {
    if (!e.target) return null;
    return e.currentTarget.getAttribute("data-id");
  };

  const onDelete = (e: React.MouseEvent): void => {
    const id = getID(e);

    if (!id) return;

    const deletedId = parseInt(id, 10);
    if (!deletedItems.includes(deletedId))
      setDeletedItems([...deletedItems, deletedId]);
  };

  const onSelect = (e: React.MouseEvent) => {
    const id = getID(e);

    if (!id) return;
    const selectedId = parseInt(id, 10);
    const selectedCharacter = characters.find(
      (c: ICharacter) => parseInt(c.id, 10) === selectedId
    );

    if (selectedCharacter) {
      /morty/i.test(selectedCharacter.name)
        ? setPartyMorty(selectedCharacter)
        : setPartyMorty(partyMorty);
      /rick/i.test(selectedCharacter.name)
        ? setPartyRick(selectedCharacter)
        : setPartyRick(partyRick);
    }
  };

  const getExcludedIds = () => {
    const selectedRick = partyRick ? parseInt(partyRick.id, 10) : null;
    const selectedMorty = partyMorty ? parseInt(partyMorty.id, 10) : null;
    return [...deletedItems, selectedMorty, selectedRick].filter(
      (item) => item !== null
    );
  };

  const filteredCharacters = characters.filter(
    (c: ICharacter) => !getExcludedIds().includes(parseInt(c.id, 10))
  );

  const displayedCharacters = getExcludedIds().length
    ? filteredCharacters.slice(0, 6)
    : characters.slice(0, 6);

  return {
    onDelete,
    onSelect,
    partyMorty,
    partyRick,
    displayedCharacters,
  };
};
