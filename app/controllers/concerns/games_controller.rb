class GamesController < ApplicationController
  def index
    render json: Game.all(), status: :ok
  end

  def show
    user_id = params[:id]
    render json: Game.where(user_id: user_id), status: :ok
  end
  def destroy
    Game.find(params[:id]).destroy
    head :no_content
  end

  def create
    myGame = Game.create!(strong_params)
    render json: myGame, status: :created
  end

  private

  def strong_params
    params.permit(
      :user_id
    )
  end

end
