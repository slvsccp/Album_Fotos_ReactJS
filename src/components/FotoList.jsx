import { Foto } from "./Foto";

export function FotoList({ fotos }) {
  return (
    <div className="album">
      {fotos.map((foto) => (
        <Foto key={foto.id} dados={foto} />
      ))}
    </div>
  );
};