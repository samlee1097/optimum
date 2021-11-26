class User < ApplicationRecord
    has_many :logs

    validates :username, :password, :age, :weight, :gender, presence: true
    validates :username, uniqueness: true
    validates :age, numericality: {less_than_or_equal_to: 99, greater_than_or_equal_to: 0}
    validates :weight, numericality: {less_than_or_equal_to: 599, greater_than_or_equal_to: 0}
end
