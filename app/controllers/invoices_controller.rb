class InvoicesController < ApplicationController
  before_action :set_invoice, only: [:show, :edit, :update, :destroy]
  
  def index
    @invoices = Invoice.all

    respond_to do |format|
      format.html
      format.pdf do 
        pdf = InvoicePdf.new(@invoices)
        send_data pdf.render, filename: "invoice.pdf", type: 'application/pdf'
      end
      format.csv { send_data @invoices.to_csv, filename: "invoices-#{Date.today}.csv" }
    end



  end



  def show
  end

  
  def new
    @invoice = Invoice.new
  end

  
  def edit
  end


  def create
    @invoice = Invoice.new(invoice_params)

    respond_to do |format|
      if @invoice.save
        format.html { redirect_to @invoice, notice: 'Invoice was successfully created.' }
        format.json { render :show, status: :created, location: @invoice }
      else
        format.html { render :new }
        format.json { render json: @invoice.errors, status: :unprocessable_entity }
      end
    end
  end

  
  def update
    respond_to do |format|
      if @invoice.update(invoice_params)
        format.html { redirect_to @invoice, notice: 'Invoice was successfully updated.' }
        format.json { render :show, status: :ok, location: @invoice }
      else
        format.html { render :edit }
        format.json { render json: @invoice.errors, status: :unprocessable_entity }
      end
    end
  end

  
  def destroy
    @invoice.destroy
    respond_to do |format|
      format.html { redirect_to invoices_url, notice: 'Invoice was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    
    def set_invoice
      @invoice = Invoice.find(params[:id])
    end

    
    def invoice_params
      params.require(:invoice).permit(:amount, :company, :client, :currency, :date)
    end
end
