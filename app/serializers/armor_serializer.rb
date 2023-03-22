class ArmorSerializer < ActiveModel::Serializer
  attributes :id, :material, :defense, :weight, :movement_reduction, :image
end
