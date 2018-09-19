class InvoicePdf < Prawn::Document
    def initialize(invoices)
        super()
        @invoices = Invoice.all
        header
        invoice_id
    end

    def header
        image "app/assets/images/header.png", width: 530, height: 150
      end

    def invoice_id
        table invoice_id_all do
            row(0).front_style = :bold
            self.row_colors = ['d9f9d1','d1f9ee']
            self.header = true
            self.column_widths = [30, 50, 50, 100, 100, 100, 100]
        end

    end

    def invoice_id_all
        [['id', 'currency', 'amount', 'company', 'client', 'status', 'date']] +
        @invoices.map do |invoice|
            [invoice.id, invoice.currency, invoice.amount, invoice.company, invoice.client, invoice.status, invoice.date]
        end
    end
end