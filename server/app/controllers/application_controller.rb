class ApplicationController < ActionController::Base
    attr_reader :current_user

    before_action :logged_in?

    def logged_in?

        begin 
            token = request.headers['Authorization'].split(' ')[1]
            # type, token = request.headers['Authorization'].split(' ')
            
            payload = JWT.decode(token, '5ebe2294ecd0e0f08eab7690d2a6ee69')[0]

            # payload, header = JWT.decode(token, '5ebe2294ecd0e0f08eab7690d2a6ee69')

            @current_user = User.find(payload['id'])

            if @current_user
                return true
            else
                render json: {
                    error: true,
                    message: 'User does not exist'
                }
            end
        rescue 
            # They are not
            render json: {
                error: true,
                message: 'Invalid Authentication'
            }
        end
    end

end
