import { NumCounter } from "../components/NumСounter/NumCounter";
import CasesCard from "../components/CasesCard/CasesCard";
import { Layout } from "../Layout/Layout";
import "../assets/sass/App.scss";
import { counter, cases } from "../data.json";

export const About = () => {
  return (
    <Layout>
      <section className="about">
        <div className="container">
          <h2 className="title title__fz36">Why do BEST projects choose us</h2>
          <div className="about__wrapper">
            {counter.map((item) => (
              <NumCounter key={item.label} {...item} />
            ))}
          </div>
          <h2 className="title title__fz36">USE CASES</h2>
          <div className="about__cases">
            {cases.map((item) => (
              <CasesCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};
