import { IPartyProps } from "../../interfaces/IPartyProps";
import {
  Card,
  CardImage,
  CardText,
  Heading,
  Results,
  Wrapper,
} from "./PartyResultsStyles";

const PartyResults = ({ partyMorty, partyRick }: IPartyProps) => {
  return (
    <Wrapper>
      <Heading>PARTY</Heading>
      <Results>
        <Card>
          {partyRick ? (
            <CardImage src={partyRick.image} alt={partyRick.name} />
          ) : (
            <CardText>RICK</CardText>
          )}
        </Card>
        <Card>
          {partyMorty ? (
            <CardImage src={partyMorty.image} alt={partyMorty.name} />
          ) : (
            <CardText>MORTY</CardText>
          )}
        </Card>
      </Results>
    </Wrapper>
  );
};

export default PartyResults;
