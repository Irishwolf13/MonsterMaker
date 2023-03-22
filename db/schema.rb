# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_15_053150) do
  create_table "armors", force: :cascade do |t|
    t.string "material"
    t.integer "defense"
    t.integer "weight"
    t.integer "movement_reduction"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "games", force: :cascade do |t|
    t.integer "user_id"
    t.integer "difficulty"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "join_games", force: :cascade do |t|
    t.integer "game_id"
    t.integer "monster_id"
    t.integer "monster_count"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "looks", force: :cascade do |t|
    t.string "race"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "monsters", force: :cascade do |t|
    t.integer "user_id"
    t.integer "look_id"
    t.integer "armor_id"
    t.integer "weapon_id"
    t.string "monster_name"
    t.integer "level"
    t.integer "hit_points"
    t.integer "base_armor"
    t.integer "attack"
    t.integer "magic"
    t.integer "movement"
    t.string "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "weapons", force: :cascade do |t|
    t.string "style"
    t.integer "attack"
    t.integer "weight"
    t.string "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
