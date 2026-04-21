export interface Customer {
  id: string;
  name: string;
  phone: string;
  status: "New" | "Interested" | "Paid";
  lastMessage: string;
  lastMessageAt: string;
  createdAt: string;
}

export interface Message {
  id: string;
  customerId: string;
  content: string;
  role: "user" | "assistant";
  status: "sent" | "delivered" | "read";
  timestamp: string;
}

export interface Payment {
  id: string;
  customerId: string;
  customerName: string;
  amount: number;
  status: "Paid" | "Pending";
  date: string;
  paystackReference?: string;
}

export interface AutomationSettings {
  welcomeMessage: string;
  aiTone: string;
  followUpTiming: number;
  products: {
    name: string;
    price: number;
    description: string;
  }[];
}
