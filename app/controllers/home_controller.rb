class HomeController < ApplicationController
  def index
  end

  def type
    render json: table(table_param).type(params[:column], params[:group])
  end

  def groups
    render json: table(table_param).grouped(params[:column])
  end

  private

  def table_param
    params[:table].to_sym
  end

  def table(dbtable)
    case dbtable
    when :test
      Test
    when :another_test
      AnotherTest
    end
  end
end
