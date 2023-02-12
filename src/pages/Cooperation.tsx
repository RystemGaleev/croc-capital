import PartnersCard from "../components/PartnersCard/PartnersCard";
import { Layout } from "../Layout/Layout";
import { partners } from "../data.json";
import "../assets/sass/App.scss";

export const Cooperation = () => {
  return (
    <Layout>
      <section className="cooperation">
        <div className="container">
          <div className="cooperation__block">
            <h2 className="title title__fz36">cooperation</h2>
            <div className="cooperation__descr">
              Our approach is aimed at long-term cooperation. Therefore, we
              always strive to create mutually beneficial relationships that
              will ultimately lead to synergy and common long-term victory We
              are open for partnership with investors, projects, funds and
              experts
            </div>
          </div>

          <div className="cooperation__wrapper">
            {partners.map((img, index) => (
              <PartnersCard key={index} img={img} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
