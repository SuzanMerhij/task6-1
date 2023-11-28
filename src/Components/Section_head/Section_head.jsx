
const Section_head = (props) => {
    return (
        <div className="text-center  p-2">
            <h1 className={`text-dark ${props.color} ${props.text}`}>{props.heading}</h1>
            <p className="text-body-tertiary"> {props.paragraphe}</p>
        </div>
    )
}

export default Section_head
