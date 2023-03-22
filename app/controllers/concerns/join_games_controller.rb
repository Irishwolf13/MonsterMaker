class JoinGamesController < ApplicationController
  def index
    render json: JoinGame.all(), status: :ok
  end
end
