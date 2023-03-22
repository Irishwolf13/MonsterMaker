class ArmorsController < ApplicationController
  def index
    render json: Armor.all(), status: :ok
  end
  def show
    render json: Armor.find(params[:id]), status: :ok
  end
end
