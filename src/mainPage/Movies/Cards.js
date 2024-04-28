

const Cards = (props) => {
    return (
       
        <>
            <div className="cards-grid">
                {props.elements}
            </div>
            {props.process === 'confirmed' ? (
                <div className="pagination">
                    {[...Array(props.endPage - props.startPage + 1)].map((_, index) => (
                        <button
                            key={props.startPage + index}
                            className={props.page === props.startPage + index ? "active" : "notActive"}
                            onClick={() => props.handleChange(props.startPage + index)}
                        >
                            {props.startPage + index}
                        </button>
                    ))}
                </div>
            ) : null}
        </>
    );
};

export default Cards;
