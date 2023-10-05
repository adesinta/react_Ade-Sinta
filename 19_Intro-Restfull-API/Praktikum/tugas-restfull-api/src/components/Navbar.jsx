const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between p-3 shadow-md">
        <h1 className="font-semibold text-2xl">Simple Header</h1>
        <nav>
          <ul className="flex gap-4">
            <a href="$">
              <li className="hover:bg-blue-600 bg-[#0D6EFD] w-[70px] h-[40px] flex justify-center items-center text-white rounded">
                Home
              </li>
            </a>
            <a href="#">
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">
                Features
              </li>
            </a>
            <a href="#">
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">
                Pricing
              </li>
            </a>
            <a href="#">
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">FAQs</li>
            </a>
            <a href="$">
              <li className="pt-2 text-[#0D6EFD] hover:text-blue-700">About</li>
            </a>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
