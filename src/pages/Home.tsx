import { TriangleBlue } from "../components/UI/Triangle/TriangleBlue";
import { TrianglePurple } from "../components/UI/Triangle/TrianglePurple";
import { SupportsCard } from "../components/SupportsCard/SupportsCard";
import TeamCard from "../components/TeamCard/TeamCard";
import MediaSocial from "../components/MediaSocial/MediaSocial";
import { Form } from "../components/Form/Form";
import { useState } from "react";

import { Layout } from "../Layout/Layout";
import { ModalProject } from "../components/ModalProject/ModalProject";
import { UiButton } from "../components/UI/UiButton/UiButton";
import { supportData, socialCards } from "../data.json";
import { team } from "../data.json";

export const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Layout>
      <ModalProject open={showModal} onClose={() => setShowModal(false)} />
      <div className="Home">
        <div className="bg">
          <div className="container">
            <TriangleBlue />
            <TrianglePurple />
            <main className="main">
              <div className="main__wrapper">
                <h1 className="title">
                  croc capital is a crypto fund.Investments and support for
                  projects
                </h1>
                <div className="main__descr">
                  We provide financial, technical, consulting and informational
                  support to IT projects at an early stage
                </div>
                <UiButton
                  variant="primary"
                  size="lg"
                  onClick={() => setShowModal(true)}
                >
                  Submit project
                </UiButton>
              </div>
            </main>
          </div>
        </div>

        <section className="supports">
          <div className="container">
            <div className="supports__wrapper">
              <h2 className="title title__fz36">How we can help you</h2>
              <div className="supports__column">
                <TriangleBlue />
                {supportData.map((item) => (
                  <SupportsCard key={item.num} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="team">
          <div className="container">
            <h2 className="title title__fz36">Our Team</h2>
            <div className="team__wrapper">
              <div className="team__row">
                {team.map((item) => (
                  <TeamCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="social">
          <div className="container">
            <h2 className="title title__fz36">Media resources</h2>
            <div className="social__wrapper">
              <div className="social__column">
                <TrianglePurple />
                {socialCards.map((item) => (
                  <MediaSocial key={item.id} {...item} />
                ))}
                <TriangleBlue />
              </div>
            </div>
          </div>
        </section>

        <section className="contact">
          <div className="container">
            <h2 className="title title__fz36">contact us</h2>
            <div className="contact__wrapper">
              <Form />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};
