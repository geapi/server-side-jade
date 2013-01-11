class HomeController < ApplicationController
  def index
    @no_backbone = params[:no_backbone] || false
  end
end