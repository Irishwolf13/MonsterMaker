puts 'deleting old tables ☠️'
puts 'seeding fresh data'

puts 'seeding users'
User.create(
  username: 'rooneyjohn',
  password: 'frank',
  email: 'frank@rizo.com'
)
User.create(
  username: 'frankrizo',
  password: 'john',
  email: 'john@rrooney.com'
)
puts 'seeding looks'
Look.create(
  race: 'orc',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/orc1.png'
)
Look.create(
  race: 'undead caster',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/undead%20caster.png'
)
Look.create(
  race: 'flame warrior',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/Flame%20warrior.png'
)
Look.create(
  race: 'oracle',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/Fire%20Oracle.png'
)
Look.create(
  race: 'bridge troll',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/Bridge-troll.png'
)
Look.create(
  race: 'undead priest',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/unholy-priest.png'
)
Look.create(
  race: 'Riding Raptor',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/riding-raptor.png'
)
Look.create(
  race: 'Forest Crusher',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/forest-crusher.png'
)
Look.create(
  race: 'Forest Shaman',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/thicket-shaman.png'
)

puts 'seeding armors'
Armor.create(
  material: 'None',
  defense: 0,
  weight: 0,
  movement_reduction: 0,
  image: "https://thumbs.dreamstime.com/z/no-history-armor-icon-simple-thin-line-outline-vector-history-ban-prohibition-embargo-interdict-forbiddance-icons-ui-no-179466654.jpg"
)
Armor.create(
  material: 'cloth',
  defense: 1,
  weight: 10,
  movement_reduction: 0,
  image: "http://cloud-3.steamusercontent.com/ugc/2042984690529029903/CA58EF737CFB7C388383D1547CA642498A7F61A8/"
)
Armor.create(
  material: 'leather',
  defense: 5,
  weight: 20,
  movement_reduction: 2,
  image: "http://cloud-3.steamusercontent.com/ugc/2042984690529030495/37B49E15A1FF66D29397D97109325ED5D1B2904B/"
)
Armor.create(
  material: 'chain',
  defense: 10,
  weight: 40,
  movement_reduction: 4,
  image: "http://cloud-3.steamusercontent.com/ugc/2042984690529031712/B5AFEAFB7CD650FEFA0707EDDBCAAA46A38D42E9/"
)
Armor.create(
  material: 'magical',
  defense: 10,
  weight: 40,
  movement_reduction: 4,
  image: "http://cloud-3.steamusercontent.com/ugc/2042984690529031096/1F736D9D60E147B2723BC7C3E24E7B3CE83128B5/"
)

puts 'seeding weapons'
Weapon.create(
  style: "None",
  attack: 0,
  weight: 0,
  image: "https://thumbs.dreamstime.com/z/bro-fist-bump-power-five-pound-flat-vector-icon-apps-websites-black-white-173031740.jpg"
)
Weapon.create(
  style: "sword",
  attack: 5,
  weight: 1,
  image: "http://cloud-3.steamusercontent.com/ugc/2042984690528986021/51D56CF301E09EF74EF32C22A1287DDFA1A0E983/"
)
Weapon.create(
  style: "stone axe",
  attack: 8,
  weight: 2,
  image: "http://cloud-3.steamusercontent.com/ugc/2042984690528993900/76F44796A5A3B3031EFFA8F93B007CC5AF35C857/"  
)
Weapon.create(
  style: "iron axe",
  attack: 12,
  weight: 4,
  image: "http://cloud-3.steamusercontent.com/ugc/2042984690528994609/AA652C203CDD02734B704E306343A0A6B3C4C621/"  
)
Weapon.create(
  style: "knife",
  attack: 3,
  weight: 1,
  image: "http://cloud-3.steamusercontent.com/ugc/2042984690528984802/49F31920C43E2740793CB62F38753918DE02B986/"  
)
puts 'Creating Monsters'
Monster.create(
  user_id: 1,
  look_id: 1,
  armor_id: 1,
  weapon_id: 1,
  level: 1,
  hit_points: 10,
  base_armor: 0,
  attack: 10,
  magic: 10,
  movement: 10,
  monster_name: 'Frank',
  bio: "This is my first character, Frank."
)
Monster.create(
  user_id: 2,
  look_id: 2,
  armor_id: 3,
  weapon_id: 1,
  level: 2,
  hit_points: 20,
  base_armor: 0,
  attack: 20,
  magic: 20,
  movement: 20,
  monster_name: 'Bill',
  bio: "This is my second character, Bill."
)
Monster.create(
  user_id: 1,
  look_id: 3,
  armor_id: 2,
  weapon_id: 2,
  level: 3,
  hit_points: 30,
  base_armor: 0,
  attack: 30,
  magic: 30,
  movement: 30,
  monster_name: 'Bubbles',
  bio: "This is my second character, Bubbles."
)

puts 'Creating Games'
Game.create(
  user_id: 1,
  difficulty: 5
)
Game.create(
  user_id: 2,
  difficulty: 5
)

JoinGame.create(
  game_id: 1,
  monster_id: 1,
  monster_count: 10
)
JoinGame.create(
  game_id: 1,
  monster_id: 2,
  monster_count: 5
)
JoinGame.create(
  game_id: 2,
  monster_id: 2,
  monster_count: 20
)
JoinGame.create(
  game_id: 2,
  monster_id: 3,
  monster_count: 3
)