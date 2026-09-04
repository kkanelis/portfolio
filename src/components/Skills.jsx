export default function Skills({ skills }) {
  const groups = Object.entries(skills)

  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="section__head">
          <span className="section__index">02</span>
          <h2 className="section__title">Prasmes</h2>
          <span className="section__line" aria-hidden="true" />
        </div>

        <div className="skills__grid">
          {groups.map(([group, items]) => (
            <div className="skills__col" key={group}>
              <h3 className="skills__group">{group}</h3>
              <ul className="skills__list">
                {items.map((item) => (
                  <li className="skills__tag" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
