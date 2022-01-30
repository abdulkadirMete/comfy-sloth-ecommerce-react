import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <img src={aboutImg} alt="nice desk"></img>
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur iste deleniti tenetur dolorum reiciendis labore neque
              molestias fugiat laborum similique, cumque, totam adipisci
              aliquid, mollitia voluptas numquam explicabo? Assumenda deleniti,
              nisi odit quae labore cumque molestiae quas impedit nesciunt quia.
              Perspiciatis eum animi labore ea iste facilis voluptatum unde
              tempore?
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
