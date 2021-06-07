import faker, { fake } from 'faker'

export class User {
  name: string
  location: {
    longitude: number,
    latitude: number
  }

  constructor(){
    this.name = faker.name.firstName()
    this.location = {
      longitude: parseFloat(faker.address.longitude()),
      latitude: parseFloat(faker.address.latitude())
    }
  }
}
