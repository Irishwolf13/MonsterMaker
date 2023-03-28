class JoinGamesController < ApplicationController
  def index
    render json: JoinGame.all(), status: :ok
  end

  def update
    myJoin = JoinGame.find(params[:id])
    myJoin.update!(strong_params)
    render json: myJoin, status: :accepted
  end

  def destroy
    myJoin = JoinGame.find(params[:id])
    myJoin.destroy
    head :no_content
  end

  def create
    myJoin = JoinGame.create!(join_params)
    render json: myJoin, status: :created
  end

  private

  def strong_params
    params.permit(
      :monster_count
    )
  end
  
  def join_params
    params.permit(
      :game_id,
      :monster_id,
      :monster_count
    )
  end
end
