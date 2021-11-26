class Log < ApplicationRecord
    belongs_to :user

    validates :title, :activity_type, :activity_duration, :date, :happiness presence: true
end
