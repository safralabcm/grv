export const AntHeader = () => {
  return (
    <nav
      aria-label="Navegação de redes sociais"
      className="bg-[#1356a3] w-full p-4 pl-12 pr-8 text-white relative mx-auto flex items-center justify-center"
    >
      <ul className="flex flex-col items-center justify-between gap-4 lg:gap-8 lg:flex-row">
        <div className="flex flex-col items-center gap-4 mx-auto my-0 md:flex-row lg:mx-0 lg:mr-auto lg:gap-0">
          <li className="flex items-center gap-2 sub-header-item-one">
            <img src="/icons/map-pin.svg" />
            <p>Palácio do café - Vitória - ES</p>
          </li>
          <a href="mailto:traffic@grvcoffee.com">
            <li className="flex items-center gap-2 sub-header-item-one">
              <img src="/icons/envelope-simple.svg" />
              <p>traffic@grvcoffee.com</p>
            </li>
          </a>
          <a href="tel:+552733353999">
            <li className="flex items-center gap-2">
              <img src="/icons/phone.svg" />
              <p>+55 27 3335-3999</p>
            </li>
          </a>
        </div>
      </ul>
    </nav>
  )
}
