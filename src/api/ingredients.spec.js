/**
 * @jest-environment node
 */

const { pactWith } = require("jest-pact")
const { Matchers } = require("@pact-foundation/pact")
const { string } = Matchers
const { getCakeIngredients } = require("./ingredients.api")

const port = 8993

pactWith(
    { consumer: "Baker", provider: "Cake_API", port: port },
    provider => {
        describe("Bake Off", () => {
            let url = "http://localhost"

            const EXPECTED_BODY = [string('sugar')]

            beforeEach(() => {
                const interaction = {
                    uponReceiving: "get request for ingredients",
                    withRequest: {
                        method: "GET",
                        path: "/ingredients/chocolate",
                        headers: {
                            "Accept": "application/json",
                            "Authorization": "Bearer 123"
                        },
                    },
                    willRespondWith: {
                        status: 200,
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: EXPECTED_BODY,
                    },
                }
                return provider.addInteraction(interaction)
            })

            it("returns the correct response", () => {
                const endpoint = {
                    url: url,
                    port: port
                }
                return getCakeIngredients(endpoint).then(response => {
                    expect(response.data).toBeInstanceOf(Array)
                })
            })
        })
    })
