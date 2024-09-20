export function Foto({ dados }) {
  return (
    <div className="foto">
      <img src={dados.urls.small} alt={dados.alt_description} />
    </div>
  )
}