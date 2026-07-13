import { StoreProvider } from "@/components/Store";
import Header from "@/components/Header";
import CartDrawer from "@/components/CartDrawer";
import Packages from "@/components/Packages";
import Compare from "@/components/Compare";
import Addons from "@/components/Addons";
import BookingSystem from "@/components/BookingSystem";
import { DemoSection } from "@/components/Forms";
import {
  Hero,
  Ticker,
  Perfect,
  KitManifest,
  Delivery,
  Launch,
  HowToBook,
  Specialist,
  Payment,
  ShotInRed,
  Contact,
  Agreements,
  Footer,
} from "@/components/Sections";

export default function Home() {
  return (
    <StoreProvider>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Perfect />
        <Packages />
        <KitManifest />
        <Compare />
        <Delivery />
        <Launch />
        <HowToBook />
        <BookingSystem />
        <Specialist />
        <Addons />
        <Payment />
        <ShotInRed />
        <DemoSection />
        <Contact />
        <Agreements />
      </main>
      <Footer />
      <CartDrawer />
    </StoreProvider>
  );
}
