import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Sneakers, Loafers, Canvas, Boots
  //in the UI

  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const urlSort = searchParams.get("sortBy");
  const urlCategory = searchParams.getAll("category");

  const [sortBy, setSortBy] = useState(urlSort || "");
  const [category, setCategory] = useState(urlCategory || []);

  //filtering
  const handleChange = (e) => {
    let newCategory = [...category];
    const option = e.target.value;

    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      category && (params.category = category);
      sortBy && (params.sortBy = sortBy);
      setSearchParams(params);
    
    }
  }, [category, searchParams, sortBy]);

  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-cy="filter-category">
        <div>
          <input
            type="checkbox"
            value="Sneakers"
            checked={category.includes("Sneakers")}
            onChange={handleChange}
          />
          <label>Sneakers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Loafers"
            checked={category.includes("Loafers")}
            onChange={handleChange}
          />
          <label>Loafers</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Canvas"
            checked={category.includes("Canvas")}
            onChange={handleChange}
          />
          <label>Canvas</label>
        </div>
        <div>
          <input
            type="checkbox"
            value="Boots"
            checked={category.includes("Boots")}
            onChange={handleChange}
          />
          <label>Boots</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
