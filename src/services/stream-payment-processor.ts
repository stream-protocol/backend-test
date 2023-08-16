import {
  AbstractPaymentProcessor,
  PaymentProcessorContext,
  PaymentProcessorError,
  PaymentProcessorSessionResponse,
  PaymentSessionStatus,
} from "@medusajs/medusa"
import { StreamPayHttpClient } from "../core/stream-pay-http-client";

export default class StreamPayPaymentProcessor extends AbstractPaymentProcessor {
  static identifier = "stream-payments"
  private readonly _streampayHttpClient: StreamPayHttpClient;

  constructor(container, _options) {
    super(container)
    this._streampayHttpClient = new StreamPayHttpClient()
  }

  async initiatePayment(
    context: PaymentProcessorContext
  ): Promise<
    PaymentProcessorError | PaymentProcessorSessionResponse
  > {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async authorizePayment(
    paymentSessionData: Record<string, unknown>,
    context: Record<string, unknown>
  ): Promise<
    PaymentProcessorError |
    {
      status: PaymentSessionStatus;
      data: Record<string, unknown>;
    }
  > {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async capturePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>
  ): Promise<PaymentSessionStatus> {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async cancelPayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async deletePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async refundPayment(
    paymentSessionData: Record<string, unknown>,
    refundAmount: number
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async retrievePayment(
    paymentSessionData: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async updatePayment(
    context: PaymentProcessorContext
  ): Promise<
    void |
    PaymentProcessorError |
    PaymentProcessorSessionResponse
  > {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }

  async updatePaymentData(
    sessionId: string,
    data: Record<string, unknown>
  ): Promise<Record<string, unknown> | PaymentProcessorError> {
    throw new Error('Not implemented yet');
    // return this._streampayHttpClient;
  }
}