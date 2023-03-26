class GamesController < ApplicationController
  def index
    render json: Game.all(), status: :ok
  end

  def show
    user_id = params[:id]
    render json: Game.where(user_id: user_id), status: :ok
  end
end
