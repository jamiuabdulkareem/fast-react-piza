import { useState } from "react"

function SearchOrder() {
   const [query, setQuery] = useState();

   return (
      <input placeholder="Search order number #" value={}/>
   )
}

export default SearchOrder
