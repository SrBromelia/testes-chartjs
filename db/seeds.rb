# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

if Rails.env.development?
    5.times do
        Test.create!(obj_type: 0, name: Faker::App.name)
    end
    5.times do
        Test.create!(obj_type: 1, name: Faker::App.name)
    end
    5.times do
        Test.create!(obj_type: 2, name: Faker::App.name)
    end
    5.times do
        Test.create!(obj_type: 3, name: Faker::App.name)
    end
end