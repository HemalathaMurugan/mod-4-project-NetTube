class VideosController < ApplicationController

   # skip_before_action :verify_authenticity_token, only: [:index]
    def index
        render json: Video.all
    end

    def show
        render json: Video.find(params[:id]), methods: [ :url ]
    end

    def create
        video = Video.create(video_params)
        render json: video, methods: [ :url ]
    end

    def index
        render json: Video.all, methods: [ :url ]
    end

    def show
        render json: current_video,  methods: [ :url ]
    end

    def update
        if current_user == current_video.user
            current_video.update(video_params)
            render json: current_video
        else
            render json: {
                error: true,
                message: 'That is not your video'
            }
        end
    end

    def destroy
        current_video.destroy
        render json: current_video
    end

    def define_current_video
        if params[:id]
            @current_video = Video.find(params[:id])
        else
            @current_video = Video.new
        end
    end

    private
    def video_params
        params.require(:video).permit(:user_id, :title, :description, :language, :likes, :duration, :created_at, :videoFile)
    end  
    
    def current_video
        @current_video
    end

end
