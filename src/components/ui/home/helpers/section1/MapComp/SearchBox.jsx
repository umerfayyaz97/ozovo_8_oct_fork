import { useState } from "react";
import axios from "axios";
import { MapPin } from "lucide-react";

const SearchBox = ({ label = "", onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (input) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${input}.json`,
        {
          params: {
            access_token:
              "pk.eyJ1IjoidW1lcmZheXlhejk3IiwiYSI6ImNtMWJwMm9tOTF4djUycXF4YmZjdjV5cHQifQ.Z0ENT1OPEjv2lryphSZ5EA",
            country: "AU",
            autocomplete: true,
            limit: 5,
            bbox: "115.6176,-32.6757,116.2394,-31.6241", // Bounding box for Perth
          },
        }
      );
      setSuggestions(response.data.features);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);
    if (inputValue.length > 2) {
      fetchSuggestions(inputValue);
    } else {
      setSuggestions([]);
    }
  };

  const handleLocationSelect = (suggestion) => {
    setQuery(suggestion.place_name);
    setSuggestions([]);
    onSelect({
      name: suggestion.place_name,
      lat: suggestion.center[1],
      lon: suggestion.center[0],
    });
  };

  return (
    <div className="relative text-black bg-white">
      <div className="peer-focus-within:border-yellow-500 focus:border-yellow-500 w-full h-10 px-4 gap-2 flex items-center mb-3 border border-gray-300 rounded-md">
        <MapPin />
        <input
          type="text"
          value={query}
          onChange={handleChange}
          className="w-full focus:outline-none overflow-ellipsis whitespace-nowrap"
          placeholder={label || "Enter a location"}
          style={{ width: "100%", textOverflow: "ellipsis" }}
        />
      </div>
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-full mt-1 overflow-auto bg-white border border-gray-300 rounded-md shadow-lg max-h-60">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              className="px-4 py-2 cursor-pointer hover:bg-gray-200"
              onClick={() => handleLocationSelect(suggestion)}
            >
              {suggestion.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
