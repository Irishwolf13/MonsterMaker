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

###################### Looks #####################
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
  race: 'riding raptor',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/riding-raptor.png'
)
Look.create(
  race: 'forest crusher',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/forest-crusher.png'
)
Look.create(
  race: 'forest shaman',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/thicket-shaman.png'
)
Look.create(
  race: 'barbarian raider',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/barbarian-raider.png'
)
Look.create(
  race: 'cursed caster',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/cursecaster.png'
)
Look.create(
  race: ' demonic bloodsucker',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/demonic-bloodsucker.png'
)
Look.create(
  race: 'orc treasure hunter',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/orc-treasure-hunt.png'
)
Look.create(
  race: 'pit lord',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/pit-lord.png'
)
Look.create(
  race: 'red minotaur',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/red-minotaur.png'
)
Look.create(
  race: 'undead elf',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/undead-elf.png'
)
Look.create(
  race: 'undead naga',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/undead-naga.png'
)
Look.create(
  race: 'centaur warrior',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/cintar%20warrior.png'
)
Look.create(
  race: 'dwarf defnder',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/defender.png'
)
Look.create(
  race: 'dwarf warlock',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/dwarvenWarlock.png'
)
Look.create(
  race: 'ghoul hunter',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/ghoul-hunter.png'
)
Look.create(
  race: 'whisp warrior',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/nature-protector.png'
)
Look.create(
  race: 'dwarf astrologer',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/astrologer.png'
)
Look.create(
  race: 'catacomb slug',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/catacomb-slug1.png'
)
Look.create(
  race: 'demon bonebreaker',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/demon-bonebreaker.png'
)
Look.create(
  race: 'goblin mercenary',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/goblin-mercenary.png'
)
Look.create(
  race: 'graveyard wolf',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/graveyard-wolf.png'
)
Look.create(
  race: 'night spirit',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/night-spirit.png'
)
Look.create(
  race: 'pale orc',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/pale-orc.png'
)
Look.create(
  race: 'rotten ghoul',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/rotten-ghoul.png'
)
Look.create(
  race: 'shipyard worker',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/shipyard-worker.png'
)
Look.create(
  race: 'wild swordsman',
  image: 'https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/monsters/wild-swordsman1.png'
)
# Look.create(
#   race: '',
#   image: ''
# )

###################### Armors #####################
puts 'seeding armors'
Armor.create(
  material: 'None',
  defense: 0,
  weight: 0,
  movement_reduction: 0,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/noArmor.jpg"
)
Armor.create(
  material: 'cloth',
  defense: 1,
  weight: 10,
  movement_reduction: 0,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/cloth_1.jpg"
)
Armor.create(
  material: 'flame robe',
  defense: 1,
  weight: 10,
  movement_reduction: 0,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/flameRobe.png"
)
Armor.create(
  material: 'ice robe',
  defense: 1,
  weight: 10,
  movement_reduction: 0,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/iceRobe.png"
)
Armor.create(
  material: 'leather',
  defense: 3,
  weight: 20,
  movement_reduction: 2,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/leather_1.jpg"
)
Armor.create(
  material: 'turtle shell',
  defense: 5,
  weight: 23,
  movement_reduction: 2,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/shell1.png"
)
Armor.create(
  material: 'mail',
  defense: 10,
  weight: 40,
  movement_reduction: 4,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/mail_1.jpg"
)
Armor.create(
  material: 'silver',
  defense: 12,
  weight: 50,
  movement_reduction: 4,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/silver.png"
)
Armor.create(
  material: 'silver & gold',
  defense: 14,
  weight: 50,
  movement_reduction: 4,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/silverGold.png"
)
Armor.create(
  material: 'magical',
  defense: 15,
  weight: 40,
  movement_reduction: 4,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/armor/magic_1.jpg"
)


###################### Weapons #####################
puts 'seeding weapons'
Weapon.create(
  style: "None",
  attack: 0,
  weight: 0,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/noWeapon.jpg"
)
Weapon.create(
  style: "sword",
  attack: 5,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/sword_1.jpg"
)
Weapon.create(
  style: "stone axe",
  attack: 2,
  weight: 2,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/axe_1.jpg"
)
Weapon.create(
  style: "iron axe",
  attack: 3,
  weight: 4,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/axe_2.jpg"
)
Weapon.create(
  style: "knife",
  attack: 3,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/blade_ice_1.jpg"
)
Weapon.create(
  style: "spiked club",
  attack: 3,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/club1.png"
)
Weapon.create(
  style: "jagged dagger",
  attack: 3,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/dagger_jagged.png"
)
Weapon.create(
  style: "shadow dagger",
  attack: 4,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/dagger_shadow.png"
)
Weapon.create(
  style: "spiked mace",
  attack: 4,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/mace1.png"
)
Weapon.create(
  style: "magic sword",
  attack: 10,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/sword_purple.png"
)
Weapon.create(
  style: "flame sword",
  attack: 10,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/sword_red.png"
)
Weapon.create(
  style: "magic wand",
  attack: 10,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/wand_pink.png"
)
Weapon.create(
  style: "fire wand",
  attack: 10,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/want_fire.png"
)
Weapon.create(
  style: "ice wand",
  attack: 10,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/want_ice.png"
)
Weapon.create(
  style: "a stick",
  attack: 1,
  weight: 1,
  image: "https://raw.githubusercontent.com/Irishwolf13/monsterImages/main/weapon/stick.png"
)


###################### Test monsters #####################
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


###################### Test Games #####################
puts 'Creating Games'
Game.create( #Game_id 1
  user_id: 1,
  difficulty: 3
)
Game.create(#Game_id 2
  user_id: 1,
  difficulty: 4
)
Game.create(#Game_id 3
  user_id: 1,
  difficulty: 5
)

Game.create(#Game_id 4
  user_id: 2,
  difficulty: 6
)


###################### Test Joins #####################
JoinGame.create(
  game_id: 1, #Game_id 1
  monster_id: 3,
  monster_count: 3
)
JoinGame.create(
  game_id: 1, #Game_id 1
  monster_id: 2,
  monster_count: 5
)
JoinGame.create(
  game_id: 1, #Game_id 1
  monster_id: 1,
  monster_count: 4
)
JoinGame.create(
  game_id: 1, #Game_id 1
  monster_id: 3,
  monster_count: 4
)

JoinGame.create(
  game_id: 2, #Game_id 2
  monster_id: 2,
  monster_count: 3
)
JoinGame.create(
  game_id: 2, #Game_id 2
  monster_id: 1,
  monster_count: 1
)
JoinGame.create(
  game_id: 2, #Game_id 2
  monster_id: 2,
  monster_count: 4
)

JoinGame.create(
  game_id: 3, #Game_id 3
  monster_id: 2,
  monster_count: 20
)
JoinGame.create(
  game_id: 4, #Game_id 4
  monster_id: 3,
  monster_count: 3
)