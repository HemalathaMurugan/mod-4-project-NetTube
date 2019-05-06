class Video < ApplicationRecord
    include Rails.application.routes.url_helpers

    belongs_to :user
    has_many :comments

    has_one_attached :videoFile

    def url
        begin
            url_for(self.videoFile)
        rescue => exception
            ""
        end
    end
end
