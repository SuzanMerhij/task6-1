
const Slider_content = (props) => {
    return (
            <div className="w-100 h-100 d-flex justify-content-center align-items-center  text-light">
                <div className="text-center">
                    <p>{props.paragraphe}</p>
                    <h1>{props.header}</h1>
                    <button  class="bttn" type="submit">SHOP NOW</button>
                </div>
            </div>
    )
}
export default Slider_content
