class Log < ApplicationRecord
    belongs_to :user

    validates :age, :weight, :title, :activity_duration, :activity_type, :date, :happiness, presence: true
end
