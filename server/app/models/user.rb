class User < ApplicationRecord
    has_many :videos
    has_many :comments

    def auth_token 
        JWT.encode({id: self.id}, "9885ea7895518eaf88c4a8a2e8f62c82")
    end

    def as_json(*)
        super.except('password_digest')
    end
end
