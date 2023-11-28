
const ProductsCards = (props) => {
    return (
        <div className="card w-75" >
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="d-flex">
                    <p className="card-text text-secoundry">{props.price}</p>
                    <p className="card-text text-secoundry">{props.price}</p>
                </div>
            </div>
        </div>
    )
}
export default ProductsCards
