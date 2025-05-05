const mockQuotes = [
  {
    id: 1,
    quoteNumber: "QT-2024-001",
    date: "2024-03-20",
    customer: "Maple Leaf Foods",
    pickupLocation: {
      company: "Maple Leaf Foods",
      address: "6985 Financial Drive",
      city: "Mississauga",
      state: "ON",
      zip: "L5N 0A1"
    },
    deliveryLocation: {
      company: "Canadian Tire Distribution Centre",
      address: "1 Canadian Tire Drive",
      city: "Bolton",
      state: "ON",
      zip: "L7E 5R5"
    },
    cargo: {
      type: "Refrigerated",
      weight: 15000,
      pieces: 25,
      pallets: 5,
      description: "Frozen food products"
    },
    rate: 2500.00,
    status: "Pending",
    validUntil: "2024-03-27",
    notes: "Temperature controlled transport required"
  },
  {
    id: 2,
    quoteNumber: "QT-2024-002",
    date: "2024-03-19",
    customer: "Loblaw Companies Limited",
    pickupLocation: {
      company: "Loblaw Distribution Centre",
      address: "1 President's Choice Circle",
      city: "Brampton",
      state: "ON",
      zip: "L6Y 5S5"
    },
    deliveryLocation: {
      company: "Sobeys Distribution Centre",
      address: "1000 Martin Grove Road",
      city: "Toronto",
      state: "ON",
      zip: "M9W 4X9"
    },
    cargo: {
      type: "Dry Van",
      weight: 20000,
      pieces: 40,
      pallets: 8,
      description: "Grocery items"
    },
    rate: 1800.00,
    status: "Accepted",
    validUntil: "2024-03-26",
    notes: "Standard delivery, no special requirements"
  },
  {
    id: 3,
    quoteNumber: "QT-2024-003",
    date: "2024-03-18",
    customer: "Home Depot Canada",
    pickupLocation: {
      company: "Home Depot Distribution Centre",
      address: "1000 Brock Road",
      city: "Pickering",
      state: "ON",
      zip: "L1W 3X4"
    },
    deliveryLocation: {
      company: "Costco Wholesale Canada",
      address: "5000 Dixie Road",
      city: "Mississauga",
      state: "ON",
      zip: "L4W 1E1"
    },
    cargo: {
      type: "Flatbed",
      weight: 25000,
      pieces: 15,
      pallets: 3,
      description: "Building materials"
    },
    rate: 3200.00,
    status: "Rejected",
    validUntil: "2024-03-25",
    notes: "Requires special handling equipment"
  }
];

export default mockQuotes; 