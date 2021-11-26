class LogSerializer < ActiveModel::Serializer
  attributes :id, :title, :weight, :activity_type, :activity_duration, :date, :happiness, :notes, :likes, :user_id
end
