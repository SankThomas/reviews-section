import { AiFillStar, AiOutlineStar, AiOutlineEdit } from "react-icons/ai"
import { BsChatLeftDots } from "react-icons/bs"

export default function Reviews() {
  return (
    <>
      <section className="py-10 px-5 lg:max-w-5xl lg:mx-auto lg:flex lg:flex-col lg:items-center lg:justify-center lg:h-screen">
        <h2 className="text-4xl text-center mb-10 text-gray-800">Reviews</h2>
        <div className="lg:grid grid-cols-2 gap-5">
          <div className="lg:grid grid-cols-2">
            <article>
              <h4 className="font-bold text-4xl mb-1 text-gray-800 text-center lg:text-left">
                4.9
              </h4>
              <ul className="flex mb-1 items-center justify-center lg:justify-start">
                <li>
                  <AiFillStar className="text-yellow-400 text-2xl" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-2xl" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-2xl" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-2xl" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-2xl" />
                </li>
              </ul>
              <p className="text-center lg:text-left">Based on 3,232 Reviews</p>
            </article>

            {/* Star Ratings */}
            <article>
              {/* 5 Stars */}
              <ul className="flex mb-1 items-center justify-center lg:justify-start opacity-50 hover:opacity-100">
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <div className="bg-gray-200 w-32 ml-5">
                  <p className="h-2 w-10/12 bg-yellow-400"></p>
                </div>
              </ul>

              {/* 4 Stars */}
              <ul className="flex mb-1 items-center justify-center lg:justify-start opacity-50 hover:opacity-100">
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <div className="bg-gray-200 w-32 ml-5">
                  <p className="h-2 w-1/3 bg-yellow-400"></p>
                </div>
              </ul>

              {/* 3 Stars */}
              <ul className="flex mb-1 items-center justify-center lg:justify-start opacity-50 hover:opacity-100">
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <div className="bg-gray-200 w-32 ml-5">
                  <p className="h-2 w-5 bg-yellow-400"></p>
                </div>
              </ul>

              {/* 2 Stars */}
              <ul className="flex mb-1 items-center justify-center lg:justify-start opacity-50 hover:opacity-100">
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <div className="bg-gray-200 w-32 ml-5">
                  <p className="h-2 w-1 bg-yellow-400"></p>
                </div>
              </ul>

              {/* 1 Star */}
              <ul className="flex mb-1 items-center justify-center lg:justify-start opacity-50 hover:opacity-100">
                <li>
                  <AiFillStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <li>
                  <AiOutlineStar className="text-yellow-400 text-lg" />
                </li>
                <div className="bg-gray-200 w-32 ml-5">
                  <p className="h-2 w-0 bg-yellow-400"></p>
                </div>
              </ul>
            </article>
          </div>

          {/* Buttons */}
          <ul className="flex items-center justify-center flex-wrap mt-5">
            <li className="m-2">
              <button className="flex items-center py-2 px-4 rounded bg-gray-900 text-white border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 transition-all duration-500 lg:px-6">
                <BsChatLeftDots className="mr-2 text-xl" /> Ask a Question
              </button>
            </li>
            <li>
              <button className="flex items-center py-2 px-4 rounded bg-gray-900 text-white border-2 border-gray-900 hover:bg-transparent hover:text-gray-900 transition-all duration-500 lg:px-6">
                <AiOutlineEdit className="mr-2 text-xl" /> Write a Review
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}
