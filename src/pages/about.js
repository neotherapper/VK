import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO
        title="About"
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
          <h2 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Γνωρίστε την VK architecture & construction
          </h2>
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.profilePic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Vivi Kostopoulou</figcaption>
          </figure>
          {/* <figure className="kg-card kg-image-card">
            <Img
              fluid={data.profileAlPic.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Alexnadros Parthenis</figcaption>
          </figure> */}
          <h3 id="dynamic-styles">Δραστηριότητες</h3>
          <p>
            Το γραφείο VK architecture & construction ιδρύθηκε το 2011 από την
            Παρασκευή Κωστοπούλου, Αρχιτέκτων Oxford Brookes University. Το
            portfolio μας περιλαμβάνει έργα στον τομέα των ξενοδοχείων, καθώς
            και πλήθος σύγχρονων ιδιωτικών κατοικιών, διαμερισμάτων και
            επαγγελματικών χώρων.
          </p>
          <h3 id="dynamic-styles">Η φιλοσοφία</h3>
          <p>
            Κεντρική φιλοσοφία της ομάδας είναι η δημιουργία ενός νέου τρόπου
            συμπεριφοράς μέσα στον χώρο, με αποτέλεσμα την καλλιέργεια μιας νέας
            εμπειρίας. Η αρχιτεκτονική συνδυάζεται με την τέχνη και τη
            γραφιστική, για να δώσει σχήμα και μορφή σε ένα νέο concept ανάλογα
            με τις επιθυμίες και τις ανάγκες του κάθε πελάτη.
          </p>
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
    profilePic: file(relativePath: { eq: "profile-pic.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    profileAlPic: file(relativePath: { eq: "alexandros.jpg" }) {
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
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
