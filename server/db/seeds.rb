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
           
            password: Faker::Alphanumeric.alphanumeric(8)
        )
    end

    hema = User.create(user_name: 'hema', password: 'password')

    josephine = User.create(user_name: 'josephine', password: 'password')

    trey = User.create(user_name: 'trey', password: 'password')

    #js_one = Video.create(user_id: hema.id, title:"javascript first video", description:"click here to watch the js tutorial",likes:0, duration: '')