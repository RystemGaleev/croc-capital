import "../assets/sass/App.scss";
import { Layout } from "../Layout/Layout";
export const Error = () => {
  return (
    <Layout>
      <div className="container">
        <section className="error__page">
          <div className="error__page-title">PAGES NOT FOUND</div>
          <div className="error__page-descr">Please comeback to home page</div>
          <div className="error__page-error">404</div>
        </section>
      </div>
    </Layout>
  );
};
