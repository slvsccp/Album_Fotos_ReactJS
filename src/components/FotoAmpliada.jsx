export function FotoAmpliada({ foto, setFotoAmpliada }) {
  return (
    <div className="foto-ampliada-backdrop" onClick={() => setFotoAmpliada(null)}>
      <div className="close_btn_img">&times;</div>
      <div className="foto-ampliada-container">
        <img src={foto.urls.regular} alt={foto.alt_description} />
      </div>
    </div>
  );
};