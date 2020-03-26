import React from "react"
import renderer from "react-test-renderer"
import Layout from "."

describe("Default layout", () => {
  beforeAll(() => {
    jest.mock("../hooks/useSiteMetadata")
  })
  it("renders correctly", () => {
    const tree = renderer.create(<Layout>Content</Layout>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
