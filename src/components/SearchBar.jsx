export function SearchBar() {
  const categorias = [
    "Natureza",
    "Pessoas",
    "Tecnologia",
    "Animais",
    "Esportes",
  ];

  return (
    <div className="search-bar">
      <input type="text" placeholder="Pesquisar fotos..." />
      <button>Pesquisar</button>
      <select>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
    </div>
  );
};