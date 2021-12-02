class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :gender, :age, :weight, :created_at
  
  has_one :avatar
  has_many :logs
end
