import * as React from "react"
import { Link } from "gatsby"
import Seo from "../components/seo"
import Carousel from "../components/slider/Slider"
import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <Link></Link>
    <Carousel></Carousel>
  </Layout>
)

export const Head = () => <Seo title="Inicio" />
export default IndexPage
