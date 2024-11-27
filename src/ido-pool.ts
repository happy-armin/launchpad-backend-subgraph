import { BigInt } from "@graphprotocol/graph-ts";
import {
  PoolCreated,
  TokenStake,
  TokenRefund,
  TokenClaim,
} from "../generated/templates/IDOPool/IDOPool";
import { Pool, Stake, Refund, Claim } from "../generated/schema";

// Handle the PoolCreated event
export function handlePoolCreated(event: PoolCreated): void {
  let pool = new Pool(event.params.pool.toHex());

  pool.holder = event.params.holder;
  pool.address = event.params.pool;
  pool.rewardToken = event.params.rewardToken;
  pool.buyToken = event.params.buyToken;
  pool.price = event.params.price;
  pool.softCap = event.params.softCap;
  pool.hardCap = event.params.hardCap;
  pool.startTime = event.params.startTime;
  pool.endTime = event.params.endTime;
  pool.claimTime = event.params.claimTime;
  pool.ipfsUrl = event.params.ipfsUrl;

  pool.save();
}

// Handle the TokenStake event
export function handleTokenStake(event: TokenStake): void {
  let stake = new Stake(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  stake.holder = event.params.holder;
  stake.address = event.params.pool;
  stake.amount = event.params.amount;

  stake.save();
}

// Handle the TokenRefund event
export function handleTokenRefund(event: TokenRefund): void {
  // You may want to create a separate entity or just log the refund
  let refund = new Refund(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  refund.holder = event.params.holder;
  refund.address = event.params.pool;

  refund.save();
}

// Handle the TokenClaim event
export function handleTokenClaim(event: TokenClaim): void {
  // You may want to create a separate entity for claims
  let claim = new Claim(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  claim.holder = event.params.holder;
  claim.address = event.params.pool;
  claim.amount = event.params.amount;

  claim.save();
}
