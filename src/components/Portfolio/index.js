import React from "react"
//Components 
import PortfolioCard from "./PortfolioCard"
import { CardsWrapper, PortfolioWrapper } from "./PortfolioCard/PortfolioCard.styles"
//Images
import Tetris from "../../images/Tetris.jpg"
import Gatsby from "../../images/Gatsby.png"
import ReactHooks from "../../images/ReactHooks.png"
import Luum from "../../images/Luum.png"
import SpaceX from "../../images/Spacex.jpg"
import TenThousandFeet from "../../images/TenThousandFeet.png"
import Conversica from "../../images/Conversica.png"
import Vitech from "../../images/Vitech.png"

const Portfolio = () => {
  const projects = [
    {id: 1, slug: "https://github.com/JackieCalapristi/Talk-Plant-To-Me", subtitle: "Just For Fun", title: "Talk Plant To Me", date: "September 2020", excerpt: "Talk Plant To Me is a web app to help everyone learn more about plants & become a better plant parent! The idea to create this app originally came from my desire to help my Mom, an avid gardener, learn more about her plants.", imageUrl: Gatsby},
    {id: 2, slug: "https://github.com/JackieCalapristi/gatsby-boilerplate-blog", subtitle: "Just For Fun", title: "Boilerplate Blog", date: "July 2020", excerpt: "This boilerplate blog is powered by Gatsby, Netlify, React Hooks, the Context API, GraphQL & styled components. Fork this & create the blog of your dreams!", imageUrl: Gatsby},
    {id: 3, slug: "https://github.com/JackieCalapristi/simple-tetris", subtitle: "Just For Fun", title: "Tetris", date: "July 2020", excerpt: "I built a simple tetris game using only React & React Hooks. The jury is still out regarding if this was a good idea, but I learned a lot & had a lot of fun making this!", imageUrl: Tetris},
    {id: 4, slug: "https://github.com/JackieCalapristi/tmdb-movies-app", subtitle: "Just For Fun", title: "Movie App", date: "June 2020", excerpt: "This is a movie app that utilizes React Hooks, styled components, Netlify & the The Movie Database API.", imageUrl: ReactHooks},
    {id: 5, slug: "https://luumbenefits.com/", subtitle: "Professional Work", title: "Luum", date: "2019 - Present", excerpt: "(Aquired by HealthEquity) At Luum I'm helping to build lot's of features within our MaaS (mobility as a service) products that help major employers understand, influence & distribute commuter benefits to all of their employees!", imageUrl: Luum},
    {id: 6, slug: "https://github.com/rodolfobandeira/spacex", subtitle: "Open Source", title: "SpaceX Ruby API", date: "October 2018", excerpt: "In this open source project, I created support for all API calls surrounding Dragon Capsules including tests & documentation.", imageUrl: SpaceX},
    {id: 7, slug: "https://www.smartsheet.com/platform/10000ft", subtitle: "Professional Work", title: "10,000ft", date: "2017 - 2019", excerpt: "(Aquired by SmartSheet) At 10Kft I built numerous features within their high level product managment software including ones that helped increase ARR 30% & ultimately get aquired.", imageUrl: TenThousandFeet},
    {id: 8, slug: "https://www.conversica.com/", subtitle: "Professional Work", title: "Conversica", date: "2015 - 2017", excerpt: "I helped build many features within Conversica's free trial & paid Machine Learning SaaS products including improvements to thier OLAP system, Rules Engine & multiple APIs. I also snagged a gamification ML patent.", imageUrl: Conversica},
    {id: 9, slug: "https://www.vitechgroup.com/", subtitle: "Professional Work", title: "Vitech", date: "2013 - 2015", excerpt: "(Aquired by Körber Supply Chain) Have you ever purchased spinach at the grocery store? Yoga pants online? Snowboards? Warehouse software I helped build may have gotten those to you.", imageUrl: Vitech},
  ];
  return (
    <PortfolioWrapper>
      {/* eslint-disable-next-line */}
      <h4><a id="portfolio">Porfolio</a></h4>
      <CardsWrapper>
        {projects.map(project => 
          <PortfolioCard key={project.id} slug={project.slug} title={project.title} date={project.date} excerpt={project.excerpt} imageUrl={project.imageUrl} subtitle={project.subtitle} />
        )}
      </CardsWrapper>
    </PortfolioWrapper>
  )
};

export default Portfolio;
