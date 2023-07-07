class RestaurantClass {
  id: number
  image: string
  name: string
  description: string
  review: number
  tags: string[]

  constructor(
    id: number,
    image: string,
    name: string,
    description: string,
    review: number,
    tags: string[]
  ) {
    this.id = id
    this.image = image
    this.name = name
    this.description = description
    this.review = review
    this.tags = tags
  }
}

export default RestaurantClass
