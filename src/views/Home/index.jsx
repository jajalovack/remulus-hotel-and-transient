import Hero from '../../sections/Home/Hero'
import Contents from '../../sections/Home/Contents'

const Home = () => {
  document.title="Remulus - Hotel and Transient";
  return (
    <>
      <Hero/>
      <Contents/>
    </>
  )
}

export default Home