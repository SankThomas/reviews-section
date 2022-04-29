import { FaSearch } from "react-icons/fa"
import { BiUserCircle } from "react-icons/bi"
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between p-5">
        <article className="flex items-center">
          <div>
            <h3>umzu</h3>
          </div>

          <nav className="navbar">
            <ul className="flex items-center">
              <li className="text-gray-900 border-b hover:text-blue-400 p-5 mx-2 hover:border-blue-400 transition-all duration-350 cursor-pointer text-sm">
                SHOP
              </li>
              <li className="text-gray-900 border-b hover:text-blue-400 p-5 mx-2 hover:border-blue-400 transition-all duration-350 cursor-pointer text-sm">
                ABOUT
              </li>
              <li className="text-gray-900 border-b hover:text-blue-400 p-5 mx-2 hover:border-blue-400 transition-all duration-350 cursor-pointer text-sm">
                LEARN
              </li>
              <li className="text-gray-900 border-b hover:text-blue-400 p-5 mx-2 hover:border-blue-400 transition-all duration-350 cursor-pointer text-sm">
                U SAVE CLUB
              </li>
              <li className="text-gray-900 border-b hover:text-blue-400 p-5 mx-2 hover:border-blue-400 transition-all duration-350 cursor-pointer text-sm">
                TAKE THE QUIZ!
              </li>
            </ul>
          </nav>
        </article>

        <article className="flex items-center">
          <div className="flex items-center bg-gray-200 p-1 rounded shadow">
            <input
              type="search"
              placeholder="Search UMZU"
              className="bg-gray-200"
            />
            <FaSearch />
          </div>

          <ul className="flex">
            <li>
              <BiUserCircle />
            </li>
            <li>
              <AiOutlineShoppingCart />
            </li>
          </ul>
        </article>
      </header>
    </>
  )
}
