export default function Thumbnail({ source, discount }) {
    return (
        <div className="image-container">
            <img src={source} />
            {discount > 0 && (
            <div className="discount-tag">{discount}%</div>
            )}
        </div>
    )
}
