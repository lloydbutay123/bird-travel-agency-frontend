export type User = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: {
    region: string;
    province: string;
    city: string;
    barangay: string;
    zipCode: string;
  };
};
