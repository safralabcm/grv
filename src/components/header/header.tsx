import { useState } from "react"
import { AntHeader } from "./ant-header"
import { HeaderNav } from "./nav"

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <header className="w-full bg-white mb-10">
      <div className="flex justify-between w-full">
        <img
          src="assets/logoBR.png"
          alt="logo GRV"
          className="w-[200px] h-[120px] pl-8 py-3 hidden lg:flex"
        />
        <div className="flex flex-col w-full lg:w-fit">
          <AntHeader />
          <div className="flex items-center p-4 lg:p-0">
            <img
              className="w-[160px] h-[100px] md:w-[200px] md:h-[120px] flex lg:hidden"
              src="assets/logoBR.png"
              alt="logo GRV"
            />
            <HeaderNav isOpenMenu={openMenu} setIsOpenMenu={setOpenMenu} />
          </div>
        </div>
      </div>
    </header>
  )
}
