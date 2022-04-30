import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex aliquid temporibus dolores, voluptas quibusdam facilis? Aperiam corporis libero velit illum corrupti, quae ut amet debitis odio ipsa fugiat nam commodi.</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit fuga aspernatur doloremque quos inv </p>
      <Link href="/ninjas">
        <a>See Ninja Listing</a>
      </Link>
      <Footer />
    </div>
  )
}
