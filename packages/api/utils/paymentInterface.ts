export interface RazorPayOrderInterface {
  id: string;
  amount: number;
  currency: string;
  receipt?: string;
  notes?: object;
  partial_payment?: boolean;
  first_payment_min_amount?: number;
}

export interface RazorPayOrderSuccessInterface {
  id: string;
  entity: string;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  receipt: string;
  offer_id: any;
  status: string;
  attempts: number;
  notes: any[];
  created_at: number;
}

export interface RazorPayOrderFaliureInterface {
  error: Error;
}

export interface Error {
  code: string;
  description: string;
  source: string;
  step: string;
  reason: string;
  metadata: Metadata;
  field: string;
}

export interface Metadata {
  payment_id: string;
  order_id: string;
}

export interface RazorPayPaymentLink {
  accept_partial: boolean;
  amount: number;
  amount_paid: number;
  callback_method: string;
  callback_url: string;
  cancelled_at: number;
  created_at: number;
  currency: string;
  customer: Customer;
  description: string;
  expire_by: number;
  expired_at: number;
  first_min_partial_amount: number;
  id: string;
  notes: Notes;
  notify: Notify;
  payments: any[];
  reference_id: string;
  reminder_enable: boolean;
  reminders: Reminders;
  short_url: string;
  status: string;
  updated_at: number;
  user_id: string;
}

export interface Customer {
  contact: string;
  email: string;
  name: string;
}

export interface Notes {
  policy_name: string;
}

export interface Notify {
  email: boolean;
  sms: boolean;
}

export interface Reminders {
  status: string;
}
export interface RazorPayInvoices {
  id: string;
  entity: string;
  receipt: any;
  invoice_number: any;
  customer_id: string;
  customer_details: CustomerDetails;
  order_id: string;
  line_items: LineItem[];
  payment_id: any;
  status: string;
  expire_by: any;
  issued_at: number;
  paid_at: any;
  cancelled_at: any;
  expired_at: any;
  sms_status: string;
  email_status: string;
  date: number;
  terms: any;
  partial_payment: boolean;
  gross_amount: number;
  tax_amount: number;
  taxable_amount: number;
  amount: number;
  amount_paid: number;
  amount_due: number;
  currency: string;
  description: any;
  notes: any[];
  comment: any;
  short_url: string;
  view_less: boolean;
  billing_start: any;
  billing_end: any;
  type: string;
  group_taxes_discounts: boolean;
  created_at: number;
}

export interface CustomerDetails {
  id: string;
  name: string;
  email: string;
  contact: string;
  gstin: any;
  billing_address: BillingAddress;
  shipping_address: ShippingAddress;
  customer_name: string;
  customer_email: string;
  customer_contact: string;
}

export interface BillingAddress {
  id: string;
  type: string;
  primary: boolean;
  line1: string;
  line2: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
}

export interface ShippingAddress {
  id: string;
  type: string;
  primary: boolean;
  line1: string;
  line2: string;
  zipcode: string;
  city: string;
  state: string;
  country: string;
}

export interface LineItem {
  id: string;
  item_id: any;
  ref_id: any;
  ref_type: any;
  name: string;
  description: string;
  amount: number;
  unit_amount: number;
  gross_amount: number;
  tax_amount: number;
  taxable_amount: number;
  net_amount: number;
  currency: string;
  type: string;
  tax_inclusive: boolean;
  hsn_code: any;
  sac_code: any;
  tax_rate: any;
  unit: any;
  quantity: number;
  taxes: any[];
}
