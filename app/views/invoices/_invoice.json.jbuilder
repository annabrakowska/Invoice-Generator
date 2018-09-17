json.extract! invoice, :id, :amount, :company, :client, :currency, :date, :created_at, :updated_at
json.url invoice_url(invoice, format: :json)
