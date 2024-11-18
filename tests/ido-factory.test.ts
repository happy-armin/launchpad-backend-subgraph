import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address } from "@graphprotocol/graph-ts"
import { IDOCreated } from "../generated/schema"
import { IDOCreated as IDOCreatedEvent } from "../generated/IDOFactory/IDOFactory"
import { handleIDOCreated } from "../src/ido-factory"
import { createIDOCreatedEvent } from "./ido-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString("0x0000000000000000000000000000000000000001")
    let idoPool = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let rewardToken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newIDOCreatedEvent = createIDOCreatedEvent(owner, idoPool, rewardToken)
    handleIDOCreated(newIDOCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("IDOCreated created and stored", () => {
    assert.entityCount("IDOCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "IDOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "owner",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "IDOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "idoPool",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "IDOCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "rewardToken",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
