"use client";
import { useSearchParams } from "next/navigation";

function Search() {
  // const ambilQuery = useSearchParams();
  // const query = ambilQuery.get("q");
  return (
    <main>
      {/* <h1>Search Page : {query} </h1> */}
      <h1>Search Page : {useSearchParams().get("q")} </h1>
    </main>
  );
}

export default Search;
