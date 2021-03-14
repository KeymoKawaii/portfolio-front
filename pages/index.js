import React from "react";
import Header from '../components/header'
import Portfolio from "../components/portfolio";
import About from '../components/about'
import { fetchAPI } from "../lib/api";
import Formations from "../components/formation";
import Nav from '../components/nav';
import Seo from '../components/seo';
import ContactForm from "../components/contact";
import Footer from "../components/footer";

const Home = ({header, about, portfolios, formations, homepage }) => {
  return (
    <>
      <Seo seo={homepage.seo} />
      <Nav />
      <Header header={header}/>
      <About about={about}/>
      <Portfolio portfolios={portfolios} />
      <Formations formations={formations}/>
      <ContactForm />
      <Footer />
      </>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [header, about, portfolios, formations, homepage] = await Promise.all([
    fetchAPI("/header"),
    fetchAPI("/about"),
    fetchAPI("/articles"),
    fetchAPI("/formations"),
    fetchAPI("/categories"),
    fetchAPI("/homepage")
  ]);

  return {
    props: {header, about, portfolios,formations, homepage},
    revalidate: 1,
  };
}

export default Home;
