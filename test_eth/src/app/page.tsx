import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from "next/router";
import { Navbar, Announcebar} from './components/components'


export default function Home() {
  // const router = createBrowserRouter([
  //   {
  //     element: <Layout />,
  //     children: [
  //       { path: "/", element: <Home /> },
  //       { path: "/browse", element: <Browse poke={poke} setPoke={setPoke} /> },
  //       { path: "/profile", element: <Profile poke={poke} setPoke={setPoke} /> },
  //     ],
  //   },
  // ]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Announcebar />
      <Navbar />
      <p className="font-body">soon to be ethicalapparel.org</p>
      <p className="font-body">probably add navigation (client side component)</p>
      <Link href="/about-us/our-team">Our Team</Link>
    </main>
  )
}
