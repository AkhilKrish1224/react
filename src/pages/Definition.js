import { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import NotFound from "../components/NotFound";
import DefinitionSearch from "../components/DefinitionSearch";
import useFetch from "../hooks/UseFetch";

export default function Definition() {
  //const [word, setWord] = useState();
  //const [notFound, setNotFound] = useState(false);
  //const [error, setError] = useState(false);

  let { search } = useParams();

  const location = useLocation();

  const navigate = useNavigate();

  const { word, errorStatus } = useFetch(
    "https://api.dictionaryapi.dev/api/v2/entries/en/" + search
  );

  if (errorStatus === 404) {
    return (
      <>
        <NotFound />
        <Link to="/dictionary">Search Another</Link>
      </>
    );
  }

  if (errorStatus) {
    return (
      <>
        <p>Something went wrong, try again?</p>
        <Link to="/dictionary">Search Another</Link>
      </>
    );
  }

  return (
    <>
      {word?.[0]?.meanings ? (
        <>
          <h1>Here is a Definition</h1>
          {word[0].meanings.map((meaning) => {
            return (
              <p key={uuidv4()}>
                {meaning.partOfSpeech + ": "}
                {meaning.definitions[0].definition}
              </p>
            );
          })}
          <p>Search again : </p>
          <DefinitionSearch />
        </>
      ) : null}
    </>
  );
}
