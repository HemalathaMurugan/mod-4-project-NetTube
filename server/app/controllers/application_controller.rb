class ApplicationController < ActionController::Base
    attr_reader :current_user

    before_action :logged_in?

    def logged_in?

        begin 
            token = request.headers['Authorization'].split(' ')[1]
          
            
            payload = JWT.decode(token, '5ebe2294ecd0e0f08eab7690d2a6ee69')[0]

            before_action :define_current_dragon

            def create
                dragon = Dragon.create(dragon_params)
                render json: dragon
            end
        
            def index
                render json: Dragon.all
            end
        
            def show
                render json: current_dragon
            end
        
            def update
                if current_user == current_dragon.user
                    current_dragon.update(dragon_params)
                    render json: current_dragon
                else
                    render json: {
                        error: true,
                        message: 'That is not your dragon'
                    }
                end
            end
        
            def destroy
                current_dragon.destroy
                render json: current_dragon
            end
        
            def dragon_params
                params.permit(:name, :image, :description, :atWar)
            end
        
            def define_current_dragon
                if params[:id]
                    @current_dragon = Dragon.find(params[:id])
                else
                    @current_dragon = Dragon.new
                end
            end
        
            def current_dragon
                @current_dragon
            end

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
           
            render json: {
                error: true,
                message: 'Invalid Authentication'
            }
        end
    end

end
