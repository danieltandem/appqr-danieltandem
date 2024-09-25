import * as React from "react"
import Seo from "../components/seo"
import Carousel from "../components/slider/Slider"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Carousel></Carousel>
  </Layout>
)

export const Head = () => <Seo title="Inicio" />
export default IndexPage
