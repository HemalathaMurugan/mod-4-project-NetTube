class CommentsController < ApplicationController
    def index
        render json: Comment.all
    end

    def show
        render json: Comment.find(params[:id])
    end

    def create
        comment = Comment.create(comment_params)
        render json: comment
    end

    def update
        comment = Comment.find(params[:id])
        comment.update(comment_params)
        comment.save
        render json: comment
    end

    def destroy
        comment = Comment.find(params[:id])
        unless comment.nil?
            comment.destroy
            render json: comment
        else
            render json: { error: "No comment found!" }, status: 404
        end
    end

    private
    def comment_params
        params.require(:comment).permit(:user_id, :video_id, :content, :created_at)
    end

end
