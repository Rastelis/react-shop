export default function Price({price, discount}) {
    // console.log(price + "price")
    console.log(discount + "discount" )

    if (discount === 0) return (
        <div className="price original-price mb-4 ">${price}</div>
    )
    else {
        const discountPrice = price *(100-discount);
        return (
            <div className="d-flex align-items-start mb-4">
                <span className="price discount-price me-2">${discountPrice.toFixed(2)}</span>
                <span className="price regular-price">${price}</span>
            </div>
        )
    }
}
