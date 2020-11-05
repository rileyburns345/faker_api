var express = require('express')
var app = express()
app.use(express.json())

var faker = require('faker');

class User {
    constructor() {
        this.id = faker.random.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.email = faker.internet.email()
    }
}

class Company {
    constructor() {
        this.id = faker.random.uuid()
        this.name = faker.company.companyName()
        this.address = {
            streetName: faker.address.streetName(),
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

const testUser = new User()
const testCompany = new Company()

app.get('/', (req, res) => {
    res.send('helllo world')
})

app.get('/api/users/new', (req, res) => {
    res.send(testUser)
})

app.get('/api/companies/new', (req, res) => {
    res.send(testCompany)
})

app.get('/api/user/company', (req, res) => {
    res.send([testUser, testCompany])
    res.send()
})

app.post('/create', (req, res) => {
    console.log(req.body)
    res.send('you made a post')
})

app.listen(3000, () => console.log('listening on port 3000!!'))