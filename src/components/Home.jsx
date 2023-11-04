import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Character_Card from "./Character_Card";
import Character_Details from "./Character_Details";
import {
  Container,
  Grid,
  CircularProgress,
  CircularProgressLabel,
  Button,
} from "@chakra-ui/react";
import Pagination from "./Pagination";
import Cookies from "js-cookie";
import { useDisclosure } from "@chakra-ui/react";
import Overlay from "./Overlay";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [render, setRender] = useState(false);
  const [pages, setPages] = useState();
  const [circularValue, setCircularValue] = useState(0);
  const [load, setLoad] = useState(false);
  const [totalCount, setTotalCount] = useState(0);
  const [favorites, setFavorites] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  useEffect(() => {}, [render]);

  useEffect(() => {
    const existingData = Cookies.get("favorites");
    const dataArray = existingData ? JSON.parse(existingData) : [];
    setFavorites(dataArray);
  }, []);

  const paginationCount = async (counts) => {
    const totalPages = await Math.ceil(parseInt(counts) / 10);
    let pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pagesArray.push(i);
    }
    setPages(pagesArray);
    setRender(!render);
  };
  const [manupulate, setManupulate] = useState(false);

  const fnLoad = () => {
    setTimeout(() => {
      setCircularValue(circularValue + 5);
      setManupulate(!manupulate);
    }, 350);
  };
  useEffect(() => {
    if (circularValue !== 100) {
      fnLoad();
    }

    if (circularValue === 100 && people) {
      setLoad(false);
    }
  }, [manupulate, currentPage]);

  useEffect(() => {
    setLoad(true);
    axios
      .get(`https://swapi.dev/api/people/?page=${currentPage}`)
      .then((res) => {
        setPeople(res.data.results);
        setTotalCount(res.data.count);
        paginationCount(res.data.count);
        setManupulate(!manupulate);
      })
      .catch((error) => {});
  }, [currentPage]);

  const addToFavorites = (id) => {
    if (favorites.includes(id)) {
      const myIndex = favorites.findIndex((item) => item == id);
      favorites.splice(myIndex, 1);
      setRender(!render);
    } else {
      favorites.push(id);
      setRender(!render);
    }
    Cookies.set("favorites", JSON.stringify(favorites), { expires: 7 });
  };

  return (
    <div>
      <Container maxW={"7xl"} my={"5"}>
        {load && circularValue != 100 ? (
          <div className="absolute-center">
            <CircularProgress value={circularValue} />
          </div>
        ) : (
          <>
            <Grid
              templateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={6}
            >
              {people?.map((item, i) => (
                <>
                  <Character_Card
                    people={item}
                    key={i}
                    addToFavorites={addToFavorites}
                    favorites={favorites}
                    isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose}
                    btnRef={btnRef}
                    setSelectedPerson={setSelectedPerson}
                  />
                </>
              ))}
            </Grid>
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pages={pages}
              load={load}
              setLoad={setLoad}
              circularValue={circularValue}
              totalCounts={totalCount}
              setCircularValue={setCircularValue}
            />
          </>
        )}
      </Container>
      <Overlay
        people={selectedPerson}
        addToFavorites={addToFavorites}
        favorites={favorites}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        btnRef={btnRef}
      />
    </div>
  );
};

export default Home;
