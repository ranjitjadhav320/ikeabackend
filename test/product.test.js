const request = require('supertest');
let app = require('../index')

describe('Product Routes', () => {

  // Test for GET /api/products
  describe('GET /api/products', () => {
    it('should return a list of products', async () => {
      const res = await request(app).get('/api/products'); // Call the route
      expect(res.statusCode).toBe(200); 
      expect(Array.isArray(res.body)).toBe(true); 
    });

    // it('should return a 500 Error', async () => {
    //     const res = await request(app).get('/api/products'); // Call the route
    //     expect(res.statusCode).toBe(500); 
    //   });
  });

  // Test for GET /api/products/:id
//   describe('GET /api/products/:id', () => {
//     it('should return a product by ID', async () => {
//       // Assuming you have a product with ID 1 in your database
//       const res = await request(app).get('/api/products/1'); 

//       expect(res.statusCode).toBe(200); 
//       expect(res.body).toHaveProperty('id'); 
//       expect(res.body).toHaveProperty('name');
//     });

//     it('should return 404 if product is not found', async () => {
//       const res = await request(app).get('/api/products/99999'); 

//       expect(res.statusCode).toBe(404); 
//       expect(res.body).toEqual({ error: 'Product not found' }); 
//     });
//   });

});
