import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  IDOCreated,
  OwnershipTransferred,
  addedToBlock,
  removedFromBlock
} from "../generated/IDOFactory/IDOFactory"

export function createIDOCreatedEvent(
  owner: Address,
  idoPool: Address,
  rewardToken: Address
): IDOCreated {
  let idoCreatedEvent = changetype<IDOCreated>(newMockEvent())

  idoCreatedEvent.parameters = new Array()

  idoCreatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  idoCreatedEvent.parameters.push(
    new ethereum.EventParam("idoPool", ethereum.Value.fromAddress(idoPool))
  )
  idoCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "rewardToken",
      ethereum.Value.fromAddress(rewardToken)
    )
  )

  return idoCreatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createaddedToBlockEvent(account: Address): addedToBlock {
  let addedToBlockEvent = changetype<addedToBlock>(newMockEvent())

  addedToBlockEvent.parameters = new Array()

  addedToBlockEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return addedToBlockEvent
}

export function createremovedFromBlockEvent(
  account: Address
): removedFromBlock {
  let removedFromBlockEvent = changetype<removedFromBlock>(newMockEvent())

  removedFromBlockEvent.parameters = new Array()

  removedFromBlockEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return removedFromBlockEvent
}
