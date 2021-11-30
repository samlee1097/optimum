class SessionsController < ApplicationController
    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
          session[:user_id] = user.id
          render json: user, include: ['avatar']
        else
          render json: { error: "Invalid username or password" }, status: :unauthorized
        end
    end

    # Logging out
    def destroy
      session.delete :user_id
      head :no_content
    end
end
