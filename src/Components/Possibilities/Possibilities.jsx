import './Possibilities.css'

const Possibilities = (props) => {
    return (
        <div className={`col d-flex flex-column align-items-center gap-3 ${props.margin}`}>
            <img src={props.img}/>
                <h6 className="text-center">SCORPION PROCESSOR</h6>
                <p className="text-secondary text-center">Tristique senectus et netus et malesuada fames ac turpis.</p>
        </div>
    )
}

export default Possibilities
