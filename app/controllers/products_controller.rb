class ProductsController < ApplicationController

  def index
    page_size = Product::LIMIT
    page_num = params[:page].to_i || 1;
    offset = (page_num - 1) * page_size    

    if params[:category]
      @products = Product.where(category: params[:category])
    else
      @products = Product.all
    end

    # ordering by 'created_at' as specs don't specify
    return_obj = {
      products:  @products.order('created_at').limit(page_size).offset(offset),
      num_pages: (@products.count / page_size).to_f.ceil
    }

    respond_to do |format|
      format.json { render json: return_obj }
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

  # def config 
  #   return_obj = {
  #     num_products: Product.count
  #   }
  # end

private
  
  def product_params
    params.require(:product).permit(:name, :sku, :category)
  end

end