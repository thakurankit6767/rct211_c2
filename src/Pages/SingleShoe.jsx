import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getBooks } from "../Redux/AppReducer/action";
import "./singleShoe.css";

const SingleShoe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.shoes);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    if (!data.length) {
      dispatch(getBooks());
    }
  }, [dispatch]);

 

  useEffect(() => {
    if (id) {
      const temp = data.find((data) => data.id === +id);
      temp && setCurrentBook(temp);
    }
  }, [data, id]);


 

  return (
    <div className="maindiv">
      <h2>{currentBook.name}</h2>
      <div>
        <img src={currentBook.image} alt="Cover Pic" className="simage"/>
      </div>
      <div>
        <div>{currentBook.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
