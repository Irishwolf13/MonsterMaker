class JoinGamesController < ApplicationController
  def index
    render json: JoinGame.all(), status: :ok
  end

  def update
    myJoin = JoinGame.find(params[:id])
    myJoin.update!(strong_params)
    render json: myJoin, status: :accepted
  end

  private

  def strong_params
    params.permit(
      :monster_count
    )
  end
end
