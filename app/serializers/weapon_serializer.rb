class WeaponSerializer < ActiveModel::Serializer
  attributes :id, :style, :attack, :weight, :image
end
