import {
  IDOCreated as IDOCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  addedToBlock as addedToBlockEvent,
  removedFromBlock as removedFromBlockEvent
} from "../generated/IDOFactory/IDOFactory"
import {
  IDOCreated,
  OwnershipTransferred,
  addedToBlock,
  removedFromBlock
} from "../generated/schema"

export function handleIDOCreated(event: IDOCreatedEvent): void {
  let entity = new IDOCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.idoPool = event.params.idoPool
  entity.rewardToken = event.params.rewardToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleaddedToBlock(event: addedToBlockEvent): void {
  let entity = new addedToBlock(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleremovedFromBlock(event: removedFromBlockEvent): void {
  let entity = new removedFromBlock(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
