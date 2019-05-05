# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

    User.destroy_all

    25.times do 
        User.create(
            user_name: Faker::Name.unique.name,
           
            password_digest: Faker::Alphanumeric.alphanumeric(8)
        )
    end

    hema = User.create(user_name: 'hema')
    hema.password_digest = "password"
    hema.save

    josephine = User.create(user_name: 'josephine')
    josephine.password_digest = "password"
    josephine.save

    trey = User.create(user_name: 'trey')
    trey.password_digest = "pass1234"
    trey.save

