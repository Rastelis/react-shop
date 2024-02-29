

export default function Rating({rating}) {
  return (
    <div className="position-relative product-rating">
        <div><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
      <div className="yellow-stars" style={{width: (rating*80/5) + "px"}}>
        <div className="stars-container"><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i></div>
        </div>
    </div>
  )
}
