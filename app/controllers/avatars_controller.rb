class AvatarsController < ApplicationController
    def update
        if current_user
            avatar = current_user.avatar
            avatar.update(avatar_params)
            render json:avatar
        else
            render json: { errors: avatar.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        render json: current_user.avatar
    end

    private

    def avatar_params
        params.permit(:mouth, :hair, :hairColor, :accessory, :skinColor, :eyes, :user_id, :image)
    end
end
