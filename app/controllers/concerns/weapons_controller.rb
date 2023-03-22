class WeaponsController < ApplicationController
  def index
    render json: Weapon.all(), status: :ok
  end
  def show
    render json: Weapon.find(params[:id]), status: :ok
  end
end
