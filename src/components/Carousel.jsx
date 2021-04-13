import { Carousel, Spinner } from 'react-bootstrap'
import React from 'react'
import uniqid from 'uniqid'
import { withRouter } from 'react-router-dom'


class Sliders extends React.Component {
  state = {
    arrOfMovies: [],
    fetching: true,
  }


  chunk = (array, number) => {
    const output = [];
    while (array.length > 0) {
      output.push(array.splice(0, number));
    }
    return output;
  }

  fetchMovies = async () => {
    try {
      const response = await fetch('http://www.omdbapi.com/?apikey=ad2a416a&s=' + this.props.title)
      const result = await response.json()
      const movies = result.Search
      const arrOfMovies = this.chunk(movies, 5)
      this.setState({ arrOfMovies: arrOfMovies, fetching: false })

    } catch (e) {
      console.log(e)
      this.setState({ fetching: false })
    }
  }



  componentDidMount = () => {
    this.fetchMovies()
  }

  componentDidUpdate = (previousProps) => {
    if (previousProps.title !== this.props.title) {

      this.fetchMovies()
    }
  }

  render() {
    return (
      <div className="mb-5">
        <div className='text-white'>
          <h2 className='ml-5'>{this.props.title}</h2>
          {
            this.state.fetching && (
              <div className="font-bold d-flex justify-content-center">
                <Spinner animation="grow" variant="light" />
              </div>
            )
          }
        </div>
        <Carousel>
          {this.state.arrOfMovies.map((movies) => (
            <Carousel.Item key={uniqid()}>
              <div className='imagesContainer'>
                {movies.map((movie) => (
                  <img
                    className='image-item'
                    src={movie.Poster}
                    alt={movie.title}
                    onClick={() => this.props.history.push('/details/' + movie.imdbID)}
                  />
                ))
                }
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    )
  }


}



export default withRouter(Sliders)