function Pokemon ({name, imagen}) {
    return (
    <div>
      <h2>Personaje Pokemon</h2>
      <p>{name}</p>
      <img src={imagen} alt={name}/>
    </div>
    )
}

export default Pokemon