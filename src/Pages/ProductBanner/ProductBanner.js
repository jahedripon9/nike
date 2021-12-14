/* This example requires Tailwind CSS v2.0+ */
import Pagination from '../../Pages/Pagination/Pagination'
export default function Example() {
    return (
      <div className="bg-gray-50 rounded-b-lg -mt-1 ">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl text-left lg:mx-20">
            <span className="block">Nike Air </span>
            <span className="block text-indigo-600">Max Pre-Day</span>
            <span className=" "><p className="text-sm sm:text-sm text-left font-normal">
              Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight.
          </p></span>
          <div>
              <button class="font-bold rounded-lg bg-black text-sm text-white px-5 py-2 sm:mx-auto hover:bg-gray-50 hover:text-black hover: outline">Add to Bag</button>
              <button class="font-bold outline rounded-lg lg:mx-8 text-sm text-black px-5 py-2 hover:bg-slate-400 hover:text-white">₹11,495.00</button>
          </div>
          <div class="grid grid-cols-3 gap-6 mt-10 bg-zinc-300 py-5 px-10   rounded-lg">
                <div><img  src="https://i.ibb.co/HDNj9D7/Rectangle-1047.png" alt="" /></div>
                <div><img  src="https://i.ibb.co/XLngHNm/Rectangle-1048.png" alt="" /></div>
                <div><img src="https://i.ibb.co/BjhXHmm/Rectangle-1034.png" alt="" /></div>
          </div>
            </h2>
          
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md  lg:-mt-52">
              <img className="lg:w-96 lg:mr-40" src="https://i.ibb.co/pX2RgtQ/image-1.png" alt="" />
            </div>
          </div>
        </div>
        <Pagination></Pagination>
      </div>
    )
  }
  