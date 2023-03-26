class UsersController < ApplicationController
  def index
    render json: User.all(), status: :ok
  end

  def show
    render json: User.find(params[:id]), status: :ok

    # Going to have to get user working properly to get auth working.
    # user = User.find_by(id: session[:user_id])
    # if user
    #   render json: user, status: :ok
    # else
    #   render json:{errors:"Not Authorized"}, status: :unauthorized
    # end
  end

  # def showMonsters
  #   user = User.find(params[:user])
  #   render json: user, serializer: UserShowMonstersSerializer, status: :ok
  # end
  def create
    newUser = User.create!(strong_params)
    session[:user_id] = newUser.id
    render json: newUser, status: :created
  end

  private

  def strong_params
    params.permit(
      :username,
      :password,
      :email
    )
  end
end
