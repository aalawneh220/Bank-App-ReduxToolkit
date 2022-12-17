import React, { useEffect } from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchMovies, saveData } from "../Store/Apireducer";

function Movie() {
  //hook to send action
  const dispatch = useDispatch();
  const { movies, isloading } = useSelector((state) => state.movie);

  useEffect(() => {
    if (movies.length == 0) {
      //fetchmovie =thunk
      dispatch(fetchMovies());
    }
  }, []);

  if (isloading) {
    return <h1>is loading</h1>;
  }
  console.log(movies);

  return (
    <MDBRow className="g-0 justify-content-evenly align-items-center g-2">
      {movies[0]?.map((movie) => {
        return (
          <MDBCol md="6" lg="3" className="mb-4 ps-2">
            <MDBCard>
              <MDBCardImage src={movie.image.original} position="top" />
              <MDBCardBody>
                <div className="d-flex justify-content-between">
                  <h3 className="">{movie.name}</h3>
                  <p className="small text-secondary">
                    {movie.schedule.day}|{movie.schedule.time}
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <h5 className="mb-0">{movie.genres.join(" | ")}</h5>
                  <h5 className="text-danger mb-0">{movie.language}</h5>
                </div>

                <div class="d-flex justify-content-center mb-2">
                  rate : {movie.rating.average}
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        );
      })}
    </MDBRow>
  );
}

export default Movie;
