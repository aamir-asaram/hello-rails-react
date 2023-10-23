# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

greetings = ['Hello', 'Bonjour', 'Merhaba', 'Hola', 'Ciao', 'Hallo', 'Hej', 'Ahoj', 'Salut', 'Shalom', 'Szia', 'Namaste', 'Salaam', 'Konnichiwa', 'Nǐ hǎo', 'Anyoung haseyo', 'Olá', 'Zdravstvuyte', 'Sawasdee', 'Guten tag', 'Kamusta', 'Salam', 'Selam', 'Sveiki']
greetings.each do |greet|
  Greeting.create(greeting: greet)
end