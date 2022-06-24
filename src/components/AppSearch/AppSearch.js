import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {API_KEY} from "../../confing.js";

export const AppSearch = ({setDispatch}) => {
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (inputVal) {
      onSearch();
    }
  }, [inputVal]);

  const onSearch = async () => {
    const city = list.find((city) => city.LocalizedName === inputVal);
    if (city) {
      navigate(`?key=${city.Key}&cityName=${city.LocalizedName}`);
      setDispatch(city.Key, city.LocalizedName);
      return;
    }

    try {
      const results = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${inputVal}`,
        {
          headers: {}
        }
      );
      setList(results.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="search">
      <input
        type="search"
        placeholder="Search..."
        list="data"
        value={inputVal}
        className="search__input"
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <datalist id="data">
        {list.map((item, index) => (
          <option key={index} value={item.LocalizedName} />
        ))}
      </datalist>
    </section>
  );
};
