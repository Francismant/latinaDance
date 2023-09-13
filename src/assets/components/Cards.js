

function Cards({ title, imageUrl, textName, text }) {
    return (
        <section className="df fc jcc aic gap1">
            <h3 className="fsize2_5 fweight5" >{title}</h3>
            <img src={imageUrl} alt={`deux professeurs de ${title}`} />
            <p className="fsize2">{textName}</p>
            <p className="fsize2 tac pr50 pl50">{text}</p>
        </section>
    )
}

export default Cards