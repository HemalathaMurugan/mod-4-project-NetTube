class ApplicationController < ActionController::Base
    attr_reader :current_user

    before_action :logged_in?

    def logged_in?

        begin 
            token = request.headers['Authorization'].split(' ')[1]
          
            
            payload = JWT.decode(token, '5ebe2294ecd0e0f08eab7690d2a6ee69')[0]

            before_action :define_current_video

            def create
                video = Video.create(video_params)
                render json: video
            end
        
            def index
                render json: Video.all
            end
        
            def show
                render json: current_video
            end
        
            def update
                if current_user == current_video.user
                    current_Video.update(video_params)
                    render json: current_video
                else
                    render json: {
                        error: true,
                        message: ''
                    }
                end
            end
        
            def destroy
                current_video.destroy
                render json: current_video
            end
        
            def video_params
                params.permit(:name, :image, :description, :atWar)
            end
        
            def define_current_video
                if params[:id]
                    @current_video = Video.find(params[:id])
                else
                    @current_video = Video.new
                end
            end
        
            def current_video
                @current_video
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
