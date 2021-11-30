class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :gender, :age, :weight
  
  has_one :avatar
end
