// import * from "../static/images"
import Image from 'next/image'

export default function Navbar(props) {
  return (
    <div className="navbar flex flex-row justify-start w-screen h-1/10 border-2 border-black">
      <div className="flex flex-row items-center justify-around w-1/2">
        <div className="logo-container"><Image src="/static/images/swirlgreen.png" alt="logo" width="30" height="30" /></div>
        <h1 className="border-2 border-black">Home</h1>
        <h1 className="border-2 border-black">Shop</h1>
        <h1 className="border-2 border-black">Custom Orders</h1>
        <h1 className="border-2 border-black">Our Impact</h1>
        <h1 className="border-2 border-black">About Us</h1>
        <h1 className="border-2 border-black">FAQ</h1>
        <h1 className="border-2 border-black">Blog</h1>
      </div>
    </div>
  )
}
