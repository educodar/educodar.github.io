/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { MainContent, useMDXComponents } from "muy"

import Container from "@material-ui/core/Container"
import CssBaseline from "@material-ui/core/CssBaseline"
import Divider from "@material-ui/core/Divider"

import Header from "../components/Header"
import Footer from "../components/Footer"
import theme from "../themes"
import { MDXProvider } from "@mdx-js/react"
import useSiteMetadata from "../hooks/useSiteMetadata"
import ThemeProvider from "@material-ui/styles/ThemeProvider"

const Layout = ({ children }) => {
  const components = useMDXComponents()
  const siteMetadata = useSiteMetadata()

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={components}>
        <CssBaseline />
        <Header siteTitle={siteMetadata && siteMetadata.title} />
        <Divider />
        <MainContent>
          <Container maxWidth={"md"}>{children}</Container>
        </MainContent>
        <Divider />
        <Footer siteTitle={"Educodar"} />
      </MDXProvider>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
