class Log < ApplicationRecord
    belongs_to :user

    validates :weight, :activity_duration, :activity_type, :date, :happiness, presence: true
end
