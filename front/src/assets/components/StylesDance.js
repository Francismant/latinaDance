function StylesDance({ title, text, imageUrl, reverse }) {
  const containerClass = reverse ? 'df-reverse' : 'df';
  return (
    <section>
      <h3 className="fsize2 fweight4 tac mb3pc">{title}</h3>
      <div className={`df jcsa aic gap10 fw ${containerClass}`}>
        <div className="size3">
          <img src={imageUrl} alt={`des couples qui prennent un cours de danse de ${title}`} />
        </div>
        <p className="fsize1_25 size3 space">{text}</p>
      </div>
    </section>
  )
}

export default StylesDance