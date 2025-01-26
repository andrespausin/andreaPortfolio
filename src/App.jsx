import { Header } from './components/Header/heaeder.jsx'
import { Banner } from './components/body/banner/banner.jsx'
import { Footer } from './components/footer/footer.jsx'
import './App.css'
import {bannerValues} from './components/body/banner/bannerValues.js'

function App() {
  return (
    <>
      <Header />
      <Banner text={bannerValues.text} title={bannerValues.title} />
      <Footer />
    </>
  )
}

export default App
