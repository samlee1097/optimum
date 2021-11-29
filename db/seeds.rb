puts "seeding users!"
User.create!(username: "sam", password: "sam", gender: "Male", age: 24, weight: 165)

puts "seeding avatar"
Avatar.create!(mouth: 0, eyes:0, hairColor:0, skinColor:0, user_id: 1, hair: 0, accessory:0, image: "https://avatars.dicebear.com/api/big-smile/:seed.svg?mouth[]=openedSmile&eyes[]=cheery&hair[]=shortHair&accessories[]=catEars&skinColor[]=variant01&hairColor[]=variant01")