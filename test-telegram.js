// Diagnostic script to test Telegram API endpoint
// Run with: node test-telegram.js

const testData = {
  orderId: "TEST-001",
  fullName: "Test User",
  phone: "+1234567890",
  paymentType: "cash",
  deliveryType: "delivery",
  address: {
    city: "Test City",
    street: "Test Street",
    house: "1",
    apartment: "10",
    entrance: "1",
    floor: "2"
  },
  comment: "Test order",
  items: [
    {
      id: "1",
      name: "iPhone 15 Pro",
      price: 50000,
      quantity: 1,
      color: "Black",
      storage: "256GB",
      image: "/images/test.jpg"
    }
  ],
  total: 50000
};

async function testEndpoint() {
  try {
    console.log('🧪 Testing Telegram API endpoint...\n');

    const response = await fetch('http://localhost:3001/api/telegram/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    console.log('Status:', response.status, response.statusText);

    const data = await response.json();
    console.log('\n📦 Response:');
    console.log(JSON.stringify(data, null, 2));

    if (!response.ok) {
      console.log('\n❌ Error details:');
      console.log('  -', data.error);
      if (data.details) {
        console.log('  -', data.details);
      }
    } else {
      console.log('\n✅ Test passed!');
    }
  } catch (error) {
    console.error('\n❌ Request failed:', error.message);
  }
}

testEndpoint();
