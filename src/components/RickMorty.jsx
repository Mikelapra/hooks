function RickMorty ({name, imagen}) {
    return (
    <div>
      <h2>Personaje Rick y Morty</h2>
      <p>{name}</p>
      <img src={imagen} alt={name}/>
    </div>
    )
}

export default RickMorty