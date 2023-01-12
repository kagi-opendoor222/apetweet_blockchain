/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface IGovernmentInterface extends utils.Interface {
  functions: {
    "abstain()": FunctionFragment;
    "determinePresident()": FunctionFragment;
    "getPresident()": FunctionFragment;
    "isCandidate(address)": FunctionFragment;
    "numberOfVotes(address)": FunctionFragment;
    "runForCandidate()": FunctionFragment;
    "vote(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "abstain"
      | "determinePresident"
      | "getPresident"
      | "isCandidate"
      | "numberOfVotes"
      | "runForCandidate"
      | "vote"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "abstain", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "determinePresident",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPresident",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isCandidate",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "numberOfVotes",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "runForCandidate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "abstain", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "determinePresident",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPresident",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCandidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "numberOfVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "runForCandidate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {};
}

export interface IGovernment extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGovernmentInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    abstain(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    determinePresident(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getPresident(overrides?: CallOverrides): Promise<[string]>;

    isCandidate(
      _verifyAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    numberOfVotes(
      _candidateAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    runForCandidate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vote(
      _candidateAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  abstain(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  determinePresident(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getPresident(overrides?: CallOverrides): Promise<string>;

  isCandidate(
    _verifyAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  numberOfVotes(
    _candidateAddress: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  runForCandidate(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vote(
    _candidateAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    abstain(overrides?: CallOverrides): Promise<void>;

    determinePresident(overrides?: CallOverrides): Promise<void>;

    getPresident(overrides?: CallOverrides): Promise<string>;

    isCandidate(
      _verifyAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    numberOfVotes(
      _candidateAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    runForCandidate(overrides?: CallOverrides): Promise<void>;

    vote(
      _candidateAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    abstain(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    determinePresident(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getPresident(overrides?: CallOverrides): Promise<BigNumber>;

    isCandidate(
      _verifyAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    numberOfVotes(
      _candidateAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    runForCandidate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vote(
      _candidateAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    abstain(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    determinePresident(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getPresident(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isCandidate(
      _verifyAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    numberOfVotes(
      _candidateAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    runForCandidate(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vote(
      _candidateAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}