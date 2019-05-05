class VideosController < ApplicationController
    def index
        render json: Video.all,
    end

    def show
        render json: Video.find(params[:id])
    end

    def create
        video = Video.create(video_params)
        render json: video
    end

    def update
        video = Video.find(params[:id])
        video.update(video_params)
        video.save
        render json: video
    end

    def destroy
        video = Video.find(params[:id])
        unless video.nil?
            video.destroy
            render json: video
        else
            render json: { error: "No video found!" }, status: 404
        end
    end

    private
    def video_params
        params.require(:video).permit(:user_id, :title, :description, :likes, :duration, :created_at)
    end
end
