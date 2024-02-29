import Button from "../button/Button";
import Rating from "../rating/Rating";
import Price from "../price/Price";
import Thumbnail from "../thumbnail/Thumbnail";

function Item({ item }) {
    return (
        <div className="row border-top py-4">
            <div className="col-4">
                <Thumbnail source={item.thumbnail} discount={item.discountPercentage} />
            </div>
            <div className="col-5">
                <div className="product-title fs-4">{item.title}</div>
                <Rating rating={item.rating}/>
                <div>{item.description}</div>
            </div>
            <div className="col-3">                
                <Price price={item.price} discount={item.discountPercentage} />
                <Button />
            </div>
        </div>
    )
}

export default Item;