import React, { useEffect, useState } from "react";
import "./menu.scss";
import Card from "../card/Card";
import Carousal from "../header/carousal/Carousal";

const Menu = () => {
  const [search, setSearch] = useState("");
  const [foodCat, setfoodCat] = useState([]);
  const [foodItem, setfoodItem] = useState([]);

  const loadData = async () => {
    // let response = await fetch("http://localhost:4000/api/foodData", {
    let response = await fetch(
      "https://cafe-des-juit.onrender.com/api/foodData",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    response = await response.json();

    setfoodItem(response[0]);
    setfoodCat(response[1]);
    // console.log(response[0], response[1])
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {/* <Carousal/> */}

      <div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-inner" id="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>

            <div className="carousel-item active">
              <img
                src="https://source.unsplash.com/random/900×700/?cuisine"
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div> */}
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?fruit"
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div> */}
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?food"
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?burger"
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
            </div>
            <div className="carousel-item">
              <img
                src="https://source.unsplash.com/random/900×700/?drinks"
                className="d-block w-100"
                alt="..."
              />
              {/* <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div> */}
            </div>

            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="d-flex justify-content-center mt-5" role="search">
            <input
              className="form-control me-2 bg-transparent w-50 text-warning"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="btn btn-outline-warning" type="submit">
              Search
            </button>
          </div>
        </div>
      </div>
      <div id="menu">
        <h1>Menu</h1>
        <div className="container">
          {foodCat.length > 0
            ? foodCat.map((data) => {
                return (
                  <div className="row mb-3 text-light" key={data._id}>
                    <div className="fs-3">{data.CategoryName}</div>
                    <hr />

                    {foodItem.length > 0 ? (
                      foodItem
                        .filter(
                          (item) =>
                            item.CategoryName === data.CategoryName &&
                            item.name
                              .toLowerCase()
                              .includes(search.toLocaleLowerCase())
                        )
                        .map((filterItems) => {
                          return (
                            <div
                              className="col-12 col-md-6 col-lg-3"
                              key={filterItems._id}
                            >
                              <Card
                                foodName={filterItems.name}
                                id={filterItems._id}
                                options={filterItems.options[0]}
                                imgSrc={filterItems.img}
                                desc={filterItems.description}
                              />
                            </div>
                          );
                        })
                    ) : (
                      <div>No such data found</div>
                    )}
                  </div>
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
};

export default Menu;
