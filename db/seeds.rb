User.destroy_all
Avatar.destroy_all
Log.destroy_all


puts "seeding users!"

User.create!(username: "sam", password: "sam", gender: "Male", age: 24, weight: 165)

puts "seeding avatar"

for i in 1..User.all.length do 
    Avatar.create!(mouth: 0, eyes:0, hairColor:0, skinColor:0, user_id: i, hair: 0, accessory:0, image: "https://avatars.dicebear.com/api/big-smile/:seed.svg?mouth[]=openedSmile&eyes[]=cheery&hair[]=shortHair&accessories[]=catEars&skinColor[]=variant01&hairColor[]=variant01")
end

puts "seeding logs"

Log.create!(user_id: 1, activity_type: "Running", activity_duration: 60, date: "Nov 22 2021", weight: 167, happiness: 5, notes: "I hate running", likes: 0)
Log.create!(user_id: 1, activity_type: "Swimming", activity_duration: 18, date: "Dec 4 2021", weight: 168, happiness: 2, notes: "I love swimming", likes: 0)
Log.create!(user_id: 1, activity_type: "Dancing", activity_duration: 12, date: "Nov 21 2021", weight: 170, happiness: 3, notes: "First time dancing!", likes: 0)
Log.create!(user_id: 1, activity_type: "Basketball", activity_duration: 45, date: "Dec 6 2021", weight: 168, happiness: 1, notes: "Dropped 30 points", likes: 0)
Log.create!(user_id: 1, activity_type: "Biking", activity_duration: 25, date: "Nov 30 2021", weight: 169, happiness: 5, notes: "", likes: 0)
Log.create!(user_id: 1, activity_type: "Jump Rope", activity_duration: 45, date: "Nov 28 2021", weight: 171, happiness: 4, notes: "Training for marathon", likes: 0)
Log.create!(user_id: 1, activity_type: "Basketball", activity_duration: 105, date: "Dec 1 2021", weight: 165, happiness: 5, notes: "Need to work on left hand layups", likes: 0)
Log.create!(user_id: 1, activity_type: "Running", activity_duration: 85, date: "Dec 2 2021", weight: 171, happiness: 2, notes: "I hate running", likes: 0)