class LooksController < ApplicationController
  skip_before_action :authorize
  def index
    render json: Look.all(), status: :ok
  end
end
