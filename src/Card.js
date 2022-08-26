const Card = (props) => {
    return (
<<<<<<< HEAD
      <div id={props.id} className="my_flexbox-item">
        <img src={props.image} className="my_img-style"/>
        <h4>{props.title}</h4>
        <p>{props.instructor}</p>
        <div className="div4">
          <span className="svg">
              <svg preserveAspectRatio="none" viewBox="0 -150 300 300">
                  <polygon points="100,10 40,180 190,60 10,60 160,180"/>
              </svg>
          </span>
          <span className="svg">
              <svg preserveAspectRatio="none" viewBox="0 -150 300 300">
                  <polygon points="100,10 40,180 190,60 10,60 160,180"/>
              </svg>
          </span>
          <span className="svg">
              <svg preserveAspectRatio="none" viewBox="0 -150 300 300">
                  <polygon points="100,10 40,180 190,60 10,60 160,180"/>
              </svg>
          </span>
          <span className="svg">
              <svg preserveAspectRatio="none" viewBox="0 -150 300 300">
                  <polygon points="100,10 40,180 190,60 10,60 160,180"/>
              </svg>
          </span>
          <p>({props.students})</p>
        </div>
=======
      <div id={props.id} class="my_flexbox-item">
        <img src={props.image} class="my_img-style"/>
        <h4>{props.title}</h4>
        <p>{props.author}</p>
>>>>>>> ec6365ca14b159f3b6da62970c1a353525f9add3
      </div>
    )
}

export default Card;