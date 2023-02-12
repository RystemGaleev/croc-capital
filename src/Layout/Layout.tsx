import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
