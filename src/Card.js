const Card = (props) => {
    return (
      <div id={props.id} class="my_flexbox-item">
        <img src={props.image} class="my_img-style"/>
        <h4>{props.title}</h4>
        <p>{props.author}</p>
      </div>
    )
}

export default Card;