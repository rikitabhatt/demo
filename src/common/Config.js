export const API_TOKEN = process.env.MIX_PROJECT_API_TOKEN;
export const APP_HOST = process.env.MIX_PUBLIC_URL;
export const API_HOST = process.env.MIX_PUBLIC_URL+'api/';

export const test  = [
    { 
        id: '1',
        status: 'Ordered',
    },
    {
        id: '2',
        status: 'Pack',
    },
  ]
  export const OrderItemStatus  = ['Ordered','Accept', 'Reject', 'Packed', 'Shipped','Ready to Pickup','Delivered'];
//  0=pending(Ordered),1=Accept,2=Reject,3=Packed,4=Shipping,5=readytopickup,6=complete(Shipped)	