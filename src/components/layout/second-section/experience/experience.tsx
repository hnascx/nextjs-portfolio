export const Experience = () => {
  return (
    <section>
      <article className="grid grid-cols-[19%_81%] gap-4">
        <span className="text-body-xs text-gray-200 tracking-wide mt-1">
          2024 — PRESENT
        </span>
        <div className="flex flex-col gap-1.5">
          <h1 className="text-body-md text-gray-100">
            Desenvolvedor React (VTEX IO) · Loungerie
          </h1>
          <p className="text-body-sm text-gray-200">
            Desenvolvimento e manutenção de componentes usados para construção
            do front-end do e-commerce. Trabalho em estreita colaboração com
            equipes multifuncionais, incluindo Analistas de UX, Designers e time
            de Marketing. Interface com agência externa para processo de deploy.
          </p>
          <ul className="flex flex-row gap-1.5 mt-2.5">
            <li className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2">
              React.js
            </li>
            <li className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2">
              Typescript
            </li>
            <li className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2">
              SCSS
            </li>
            <li className="text-body-tag text-cyan-100 bg-cyan-200/40 rounded-2xl px-3 py-2">
              Next.js
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}
