ActiveRecord::Schema.define(version: 2021_11_26_233042) do

  enable_extension "plpgsql"

  create_table "logs", force: :cascade do |t|
    t.string "title"
    t.integer "weight"
    t.string "activity_type"
    t.string "activity_duration"
    t.string "date"
    t.integer "happiness"
    t.string "notes"
    t.integer "likes"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password"
    t.string "gender"
    t.integer "age"
    t.integer "weight"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
