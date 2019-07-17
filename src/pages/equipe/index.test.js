import React from "react"
import renderer from "react-test-renderer"

import TeamPage from "."

describe("Team page", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<TeamPage />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})