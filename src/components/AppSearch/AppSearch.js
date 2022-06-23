import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {API_KEY} from "../../confing.js";

export const AppSearch = ({setDispatch}) => {
  let cancelToken;
  const [list, setList] = useState([]);
  const navigate = useNavigate();

  const onSearch = async (event) => {
    const {value} = event.target;
    if (value === "") {
      return;
    }

    if (typeof cancelToken != typeof undefined) {
      cancelToken.cancel("Operation canceled due to new request.");
    }

    const city = list.find((city) => city.LocalizedName === value);
    if (city) {
      navigate(`?key=${city.Key}&cityName=${city.LocalizedName}`);
      setDispatch(city.Key, city.LocalizedName);
      return;
    }

    cancelToken = axios.CancelToken.source();

    try {
      const results = await axios.get(
        `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${value}`,
        {
          cancelToken: cancelToken.token,
          timeout: 1000,
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
        className="search__input"
        onInput={(e) => onSearch(e)}
      />
      <datalist id="data">
        {list.map((item, index) => (
          <option key={index} value={item.LocalizedName} />
        ))}
      </datalist>
    </section>
  );
};
