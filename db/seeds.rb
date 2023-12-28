puts "🌱 Seeding spices..."
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(name: Faker::Name.name)
user2 = User.create(name: Faker::Name.name)
user3 = User.create(name: Faker::Name.name)
user4 = User.create(name: Faker::Name.name)
user5 = User.create(name: Faker::Name.name)
user6 = User.create(name: Faker::Name.name)
user7 = User.create(name: Faker::Name.name)
user8 = User.create(name: Faker::Name.name)


r1 = Restaurant.create(name: "Boca Bistro", cuisine_type: "Mediterranean", rating: Faker::Number.within(range: 1..10), delivery: true)
r2 = Restaurant.create(name: "Chianti Ristorante", cuisine_type: "Italian", rating: Faker::Number.within(range: 1..10), delivery: true)
r3 = Restaurant.create(name: "Hatties", cuisine_type: "American", rating: Faker::Number.within(range: 1..10), delivery: false)
r4 = Restaurant.create(name: "15 Church", cuisine_type: "American", rating: Faker::Number.within(range: 1..10), delivery: true)
r5 = Restaurant.create(name: "Harvey's Restaraunt & Bar", cuisine_type: "Irish", rating: Faker::Number.within(range: 1..10), delivery: false)
r6 = Restaurant.create(name: "The Mouzon House", cuisine_type: "French", rating: Faker::Number.within(range: 1..10), delivery: false)
r7 = Restaurant.create(name: "Scallions", cuisine_type: "American", rating: Faker::Number.within(range: 1..10), delivery: true)
r8 = Restaurant.create(name: "Ripe Tomato", cuisine_type: "Italian", rating: Faker::Number.within(range: 1..10), delivery: true)
r9 = Restaurant.create(name: "The Brook Tavern", cuisine_type: "American", rating: Faker::Number.within(range: 1..10), delivery: false)
r10 = Restaurant.create(name: "Karavalli", cuisine_type: "Indian", rating: Faker::Number.within(range: 1..10), delivery: true)



review1 = Review.create(content: "The food was delicious", restaurant_id: r1.id)
review2 = Review.create(content: "The food was terrible", restaurant_id: r2.id)
review3 = Review.create(content: "The atmosphere was very nice and calming", restaurant_id: r3.id)
review4 = Review.create(content: "The final bill for the food was much higher than I thought it would be", restaurant_id: r4.id)
review5 = Review.create(content: "The staff was very friendly and the food was amazing", restaurant_id: r5.id)
review6 = Review.create(content: "I would highly recommend eating here if you are in town", restaurant_id: r6.id)
review7 = Review.create(content: "The food was reasonably priced", restaurant_id: r7.id)
review8 = Review.create(content: "I went here for my birthday and the entire staff sang me happy birthday!", restaurant_id: r8.id)
review9 = Review.create(content: "The food was perfectly cooked", restaurant_id: r9.id)
review10 = Review.create(content: "Make sure that you save room for desert. The lava cake was absolutely delicious", restaurant_id: r10.id)
review11 = Review.create(content: "The food came out cold and our waiter was not very attentive to us", restaurant_id: r1.id)
review12 = Review.create(content: "I can't wait to come back here with my entire family", restaurant_id: r2.id)
review13 = Review.create(content: "The food was not that good, but the prices were very resonable", restaurant_id: r3.id)
review14 = Review.create(content: "The best place to eat in town!", restaurant_id: r4.id)
review15 = Review.create(content: "The prices are way to high and parking is very hard to find. I would recommend only coming here later at night", restaurant_id: r5.id)
review16 = Review.create(content: "The drinks were very well priced and it was such a fun atmosphere", restaurant_id: r6.id)
review17 = Review.create(content: "I will be coming back to this place next time I am in town", restaurant_id: r7.id)
review18 = Review.create(content: "The appetizers took way to long to come out, but overall, we had a really good time", restaurant_id: r8.id)
review19 = Review.create(content: "I have been raving about this place to all my friends and family!", restaurant_id: r9.id)
review20 = Review.create(content: "Could not have asked for a better experience or better service. This is by far one of my favorite restaraunts!", restaurant_id: r10.id)


puts "✅ Done seeding!"