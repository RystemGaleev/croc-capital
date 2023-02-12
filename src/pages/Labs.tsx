import { Form } from "../components/Form/Form";
import { LabsCard } from "../components/LabsCard/LabsCard";
import { Layout } from "../Layout/Layout";
import { crocs } from "../data.json";
import "../assets/sass/App.scss";

export const Labs = () => {
  return (
    <Layout>
      <section className="labs">
        <div className="container">
          <h2 className="title title__fz36">Labs</h2>
          <div className="labs__wrapper">
            {crocs.map((item, index) => (
              <LabsCard reverse={index % 2 === 1} key={item.title} {...item} />
            ))}
          </div>
          <Form />
        </div>
      </section>
    </Layout>
  );
};
