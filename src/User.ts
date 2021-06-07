import faker, { fake } from 'faker'

export class User {
  name: string
  location: {
    lng: number,
    lat: number
  }

  constructor(){
    this.name = faker.name.firstName()
    this.location = {
      lng: parseFloat(faker.address.longitude()),
      lat: parseFloat(faker.address.latitude())
    }
  }

  markerContent(): string {
    return `User Name: ${this.name}`
  }
}
