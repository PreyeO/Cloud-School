export interface ApplicationFeeResponse {
  success: boolean;
  message: string;
  data: {
    applicationFee: {
      _id: string;
      userId: string;
      amount: number;
      currency: string;
      status: string;
      paystackReference: string;
      paystackAccessCode: string;
      paystackAuthorizationUrl: string;
      metadata: {
        paystackData: {
          authorization_url: string;
          access_code: string;
          reference: string;
        };
      };
      createdAt: string;
      updatedAt: string;
    };
    paymentUrl: string;
  };
}

export enum PaymentPlanType {
  EARLY_BIRD = "early_bird",
  MID = "mid",
  NORMAL = "normal",
}
