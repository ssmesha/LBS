import {Search} from "lucide-react";
const SearchComponent = () => {
  return(
    <div className="Search--Container">
      <input placeholder="Поиск.." type="search" />
      <button type="submit"><Search /></button>
    </div>
  );
}
export default SearchComponent;