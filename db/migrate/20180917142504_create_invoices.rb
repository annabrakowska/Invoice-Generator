class CreateInvoices < ActiveRecord::Migration[5.2]
  def change
    create_table :invoices do |t|
      t.decimal :amount, precision: 15, scale: 2, default: 0
      t.string :company
      t.string :client
      t.string :currency
      t.string :status
      t.date :date

      t.timestamps
    end
  end
end
