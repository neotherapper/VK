import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const ElementsPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="All Projects"
        keywords={[
          `Βούλα`,
          `Βουλιαγμένη`,
          `ανακαινίσεις`,
          `ανακαινίσεις κτιρίων`,
          `ανακαινίσεις σπιτιών`,
          `κατασκευές κτιρίων`,
          `κατασκευές σπιτιών`,
          `architect`,
          `vouliagmeni`,
          `construction`,
          `architect`,
        ]}
      />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h3 id="dynamic-styles">Οι υπηρεσίες</h3>

          <p>
            Το γραφείο παρέχει ολοκληρωμένες υπηρεσίες σχετικά με την μελέτη και
            την κατασκευή, σύμφωνα πάντα με τις επιθυμίες και ανάγκες σας. Από
            την αρχιτεκτονική μελέτη και τη μελέτη διακόσμησης, έως την
            ολοκλήρωση όλων των απαιτούμενων εργασιών για την πλήρη ολοκλήρωση
            της κατασκευής του έργου από δικά μας συνεργεία. Αναλαμβάνουμε
            ιδιωτικά έργα κατοικιών και επαγγελματικών χώρων από το σχεδιασμό
            του και έως την παράδοσή του «με το κλειδί στο χέρι».
          </p>
          <h3 id="dynamic-styles">Portfolio</h3>

          <p>
            Το portfolio μας περιλαμβάνει έργα στον τομέα των ξενοδοχείων, καθώς
            και πλήθος σύγχρονων ιδιωτικών κατοικιών, διαμερισμάτων και
            επαγγελματικών χώρων.
          </p>

          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.brightHouseLandPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Bright House</figcaption>
          </figure>

          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.cityLoftLandPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>City Loft</figcaption>
          </figure>

          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.barcodeHousePic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Barcode House</figcaption>
          </figure>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    barcodeHousePic: file(relativePath: { eq: "barcode-house.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    cityLoftLandPic: file(relativePath: { eq: "CITY-LOFT-LAND.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    brightHouseLandPic: file(relativePath: { eq: "BRIGHT-HOUSE-LAND.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <ElementsPage location={props.location} data={data} {...props} />
    )}
  />
)
