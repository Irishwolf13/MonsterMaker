class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :monsters

  def frank
    object.monsters.map do |item|
      {
        race: item
      }
    end
  end
end
