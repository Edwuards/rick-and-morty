import './index.scss'
export function Card({
  origin: { name: originName },
  species,
  name,
  status,
  image,
}) {
  const personStatus = {
    Alive: '🔋',
    Dead: '💀',
    unknown: '❓',
  }
  return (
    <div class="card">
      <div class="img">
        <img src={image} alt="" />
      </div>
      <div class="details">
        <p>Name: {name}</p>
        <p>Species: {species}</p>
        <p>Origin: {originName}</p>
        <p>Status: {personStatus[status]} </p>
      </div>
    </div>
  )
}
