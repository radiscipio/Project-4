class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :update, :destroy]

  # GET /products
  def index
    @products = Product.all

    render json: @products
  end

  # GET /products/1
  def show
    render json: @product
  end

    # Only allow a trusted parameter "white list" through.
    def product_params
      params.require(:product).permit(:name, :type, :price, :description, :photo_url)
    end
end
