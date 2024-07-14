import Hero from './Sections/Hero'
import PopularProduct from './Sections/PopularProduct'
import SuperQuality from './Sections/SuperQuality';
import Services from './Sections/Services';
import SpecialOffers from './Sections/SpecialOffers';
import CustomerReviews from './Sections/CustomerReviews';
import Subscribe from './Sections/Subscribe';
import Footer from './Sections/Footer';
import Nav from './Components/Nav';

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="padding bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-36 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)
export default App;