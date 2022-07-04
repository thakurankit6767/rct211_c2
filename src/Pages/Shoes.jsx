import React from "react";
import { useEffect } from "react";
import Filter from "../Components/Filter";
import { getBooks } from "../Redux/AppReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import ShoeCard from "../Components/ShoeCard";

// import { useSearchParams, useLocation, Link } from "react-router-dom";

const Shoes = () => {
  const data = useSelector((state) => state.reducer.shoes);
  console.log("shoes", data);

  const [searchParams] = useSearchParams();

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.length || location.search) {
      const sortBy = searchParams.get("sortBy");

      const getBooksParams = {
        params: {
          category: searchParams.getAll("category"),
          _sort: sortBy && "release_year",
          _order: sortBy,
        },
      };
      dispatch(getBooks(getBooksParams));

      //if deselect all filter
    } else if (location.search === "") {
      dispatch(getBooks());
    }
  }, [location.search]);
  return (
    <div>
      <Filter />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
          height: "97vh",
          overflow: "scroll",
        }}
      >
        {/* Map through the shoes list here using ShoeCard Component */}

        {data?.map((item) => (
          <Link key={item.id} to={`/shoes/${item.id}`}>
            <ShoeCard item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
