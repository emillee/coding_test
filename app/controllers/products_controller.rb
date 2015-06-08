class ProductsController < ApplicationController

  def index
    @products = Product.all
    respond_to do |format|
      format.json { render json: @products }
    end    
  end

  def update
    @product = Product.find(params[:id])

    if @product.update_attributes(product_params)
      respond_to do |format|
        format.json { render json: @product }
      end
    else
      render json: { 
        data: { errors: @product.errors.full_messages[0] }, 
        status: 422
      } 
    end
  end

private
  
  def product_params
    params.require(:product).permit(:name, :sku, :category)
  end

end