# require 'byebug'

class SessionsController < ApplicationController
  skip_before_action :authorize, only: :create
  def create
    user = User.find_by(username:params[:username])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :ok
      # byebug
      # puts 'User: '
      # puts user.id
      # puts 'Session[:user_id]'
      # puts session[:user_id]
    else
      render json: {error: 'Sorry, you suck fool!'}, status: :unauthorized
    end
  end

  def destroy
    # removes user_id from sessions hash
    session.delete :user_id
    head :no_content
  end
end
