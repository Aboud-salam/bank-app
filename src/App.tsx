import {
  NavBar,
  Billing,
  Business,
  Stats,
  Hero,
  Testimonials,
  CTA,
  CardDeal,
  Clients,
  Footer,
} from "./components";
import styles from "./style";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden px-3">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} container mx-auto`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
