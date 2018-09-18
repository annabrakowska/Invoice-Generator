class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def self.to_csv
    attributes = %w{id amount company client currency status date}
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |invoice|
        csv << invoice.attributes.values_at(*attributes)
      end
    end
  end
end
