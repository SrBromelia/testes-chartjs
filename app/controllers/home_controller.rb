class HomeController < ApplicationController
  def index
    @tests = Test.all
  end

  def type
    render json: Test.type(params[:group])
  end

  def groups
    render json: Test.grouped(params[:column])
  end
end
