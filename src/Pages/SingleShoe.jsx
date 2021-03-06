import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getShoes } from "../Redux/AppReducer/action";
import "./singleShoe.css";

const SingleShoe = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.AppReducer.shoes);
  const [currentBook, setCurrentBook] = useState({});

  useEffect(() => {
    if (!data.length) {
      dispatch(getShoes());
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
        <img src={currentBook.image} alt="Cover Pic" className="simage" />
      </div>
      <div>
        <div>{currentBook.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
