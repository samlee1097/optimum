User.destroy_all
Avatar.destroy_all

puts "seeding users!"
User.create!(username: "sam", password: "sam", gender: "Male", age: 24, weight: 165)

puts "seeding avatar"

for i in 1..User.all.length do 
    Avatar.create!(mouth: 0, eyes:0, hairColor:0, skinColor:0, user_id: i, hair: 0, accessory:0, image: "https://avatars.dicebear.com/api/big-smile/:seed.svg?mouth[]=openedSmile&eyes[]=cheery&hair[]=shortHair&accessories[]=catEars&skinColor[]=variant01&hairColor[]=variant01")
end

puts "seeding logs"

Log.create!(user_id: 1, activity_type: "Running", activity_duration: 12, date: "12-12-21", weight: 195, happiness: 3, notes: "I hate running", likes: 0)