// const db = require("../db/mysql-db");
// const request = require('supertest');


// beforeAll(async () => {
//     await db.query("CREATE TABLE companies (id SERIAL PRIMARY KEY, name TEXT)");
// });


// beforeEach(async () => {

//     await db.query("INSERT INTO companies (name) VALUES ('reed'), ('totaljobs')");
// });


// afterEach(async () => {
//     await db.query("DELETE FROM companies");
// });

// afterAll(async () => {
//     await db.query("DROP TABLE companies");
//     db.end();
// });

// describe("GET /companies", () => {
//     test("It responds with list of companies", async () => {
//         const response = await request(app).get("/companies");
//         console.log(response.body);
//         expect(response.body.length).toBe(2);
//         expect(response.body[0]).toHaveProperty("id");
//         expect(response.body[0]).toHaveProperty("name");
//         expect(response.statusCode).toBe(200);
//     });
// });

// describe("POST /companies", () => {

//     test("It responds with newly created company", async () => {
//         const newCompany = await request(app).post("/companies")
//             .send({
//                 name: "Indeed"
//             });
//         console.log(newCompany.body);
//         expect(newCompany.body).toHaveProperty("id");
//         expect(newCompany.body.name).toBe("Indeed");
//         expect(newCompany.statusCode).toBe(200);
//     });

// });

// describe("PATCH /companies/1", () => {
//     test("It responds with an updated company", async () => {
//         const newCompany = await request(app)
//             .post("/companies")
//             .send({
//                 name: "CvLibrary"
//             });
//         console.log('Before Patch....', newCompany.body);
//         const updatedCompany = await request(app)
//             .patch(`/companies/${newCompany.body.id}`)
//             .send({ name: "Monster" });
//         console.log('After Patch....', updatedCompany.body);
//         expect(updatedCompany.body.name).toBe("Monster");
//         expect(updatedCompany.body).toHaveProperty("id");
//         expect(updatedCompany.statusCode).toBe(200);

//         // should have 3 companies
//         const response = await request(app).get("/companies");
//         expect(response.body.length).toBe(3);
//     });
// });

// describe("DELETE /companies/1", () => {
//     test("It responds with a message of Deleted", async () => {
//         const newCompany = await request(app)
//             .post("/companies")
//             .send({
//                 name: "CWJobs"
//             });
//         const removedCompany = await request(app).delete(
//             `/companies/${newCompany.body.id}`
//         );

//         console.log('Delete ::: ', removedCompany.body);
//         expect(removedCompany.body).toEqual({ message: "Deleted" });
//         expect(removedCompany.statusCode).toBe(200);

//         // now we should have 2 companies
//         const response = await request(app).get("/companies");
//         expect(response.body.length).toBe(2);
//     });
// });
