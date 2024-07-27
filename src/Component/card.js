import React from 'react'

export default function card() {
  return (
    <div class="container">
      <div class="card" style={{ width: "21rem", height: "25rem" }}>
        <h2 class="ch2">Weather app</h2>
        <hr class="chr" />

        <nav class="navbar navbar-light bg-light">
          <form class="form-inline">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn1 btn-outline-success mr-sm-2" type="submit">Search</button>
          </form>
        </nav>

        <h1></h1>
        <img class="card-img-top" src="https://openweathermap.org/img/wn/11d@2x.png" alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  )
}

// export default body;